const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const child = require('child_process');
const gulp = require('gulp');
const jsonImporter = require('node-sass-json-importer');
const log = require('fancy-log');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const stylelint = require('stylelint');
const tildeImporter = require('node-sass-tilde-importer');

const packageJson = require('./package.json');
const harbourStylelintJson = '.stylelintrc.json';
const scssIndex = 'scss/index.scss';
const scssGlobs = 'scss/**/*.scss';
const stylelintGlobs = [
	'scss/components/*.scss',
	'scss/controls/*.scss',
	'scss/layouts/*.scss',
	'scss/reset/*.scss',
	'scss/themes/*.scss',
	'scss/vendor-overrides/*.scss',
	'!scss/**/index.scss'
];
const siteGlobs = [
	"./site/**/*",
];
const jekyllSiteRoot = '_gh_pages';
const cssFolder = '_gh_pages/css/';

let isBuild = false; // Used to keep process running when encountering errors while developing

function setBuild(done) {
	isBuild = true;
	done();
}

function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: jekyllSiteRoot,
		},
		port: 4000
	});
	done();
}

function browserSyncReload(done) {
	browsersync.reload();
	done();
}

function lintScss() {
	return stylelint
		.lint({
			files: stylelintGlobs,
			configFile: harbourStylelintJson,
			fix: !isBuild
		})
		.then(function(report) {
			if (report.errored) {
				const erroredResults = report.results.filter(result => result.errored);

				erroredResults.map((erroredResult) => {
					log(`⚠️  Errors found in ${erroredResult.source}`);
					erroredResult.warnings.map((warning) => {
						log(`❌  Error on line ${warning.line}:${warning.column} -> ${warning.rule}`);
					});
				});

				// Provide exit code for pipeline/CLI integration, when in build mode
				if (isBuild) {
					process.exit(1);
				}
			}

			if (!report.errored) {
				let suffix = isBuild ? 'stylint build task succesful' : 'or we\'ve automatically fixed them';
				log(`🔥 💯 🔥  No style errors found ${suffix}`);
			}
		});
}

// Build Scss
function buildScss() {
	const outputStyle = isBuild ? 'compressed' : 'expanded';
	let hasCompilerError = false;
	return gulp.src(scssIndex)
		.pipe(
			sass({
				outputStyle: outputStyle,
				importer: [tildeImporter, jsonImporter()]
			})
			.on('error', function(error) {
				hasCompilerError = true;
				sass.logError.bind(this)(error);
			})
		)
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest(cssFolder))
		.pipe(browsersync.stream())
		.on('finish', function() {
			if (hasCompilerError && isBuild) {
				process.exit(1);
			}
			if (!hasCompilerError) {
				log('🎨  Compiled SCSS to CSS');
			}
		});
}

function jekyll() {
	const env = Object.create( process.env );
	env.packageVersion = packageJson.version;

	return child.spawn("bundle", ["exec", "jekyll", "build"], { stdio: 'inherit', env });
}

function watchFiles() {
	// Watch files that need linting and trigger linting process
	gulp.watch(stylelintGlobs, lintScss);
	// Watch all scss files (including ones that don't need linting) and trigger compilation
	gulp.watch(scssGlobs, buildScss);
	// Watch site source folder and trigger jekyll
	gulp.watch(siteGlobs, gulp.series(jekyll, browserSyncReload));
}

// Exported tasks
exports.build = gulp.series(setBuild, lintScss, gulp.parallel(buildScss, jekyll));
exports.start = gulp.parallel(watchFiles, browserSync);
