const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const child = require('child_process');
const gulp = require('gulp');
const log = require('fancy-log');
const postcss = require('gulp-postcss');
const postcssReporter = require('postcss-reporter');
const postcssScssParser = require('postcss-scss');
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
const cssFolder = 'site/css/';
const jekyllSiteRoot = '_gh_pages';

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
	console.log('browserSyncReload');
	browsersync.reload();
	done();
}

function lintScss() {
	return gulp.src(stylelintGlobs)
		.pipe(postcss(
			[
				stylelint({
					configFile: harbourStylelintJson
				}),
				postcssReporter({
					clearAllMessages: true, // NOTE: prevent double error message
					throwError: isBuild,
				})
			],
			{
				syntax: postcssScssParser
			}
		))
		.on('error', function () {
			log('SCSS linting error while running build');
			process.exit(1);
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
				importer: tildeImporter
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
				log('Compiled SCSS to CSS');
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
