const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
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

// First we define all scss files to watch. Not all watched files need linting, so we define a second glob
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
const scssIndex = 'scss/index.scss';

// Compiled css is placed in Jekyll source folder.
const cssFolder = 'site/css/';
// Destination for build Jekyll site.
const jekyllSiteRoot = '_gh_pages';

/**
 * stylelintScss
 * Check if there are any stylelint errors in the SCSS and attempt to fix them when not in build mode
 * @param {Boolean} isBuild
 */
function stylelintScss(isBuild) {
	return stylelint.lint({
		files: stylelintGlobs,
		configFile: harbourStylelintJson,
		fix: !isBuild
	})
	.then(function(report) {
		if (report.errored) {
			let erroredResults = report.results.filter(result => result.errored);

			erroredResults.map((erroredResult) => {
				log(`Linter: ⚠️  Errors found in ${erroredResult.source}`);

				erroredResult.warnings.map((warning) => {
					let severity = warning.severity === 'error' ? 'Error' : 'Warning';
					log(`Linter: ❌ ${severity} caused by line ${warning.line}: ${warning.rule}`);
				});
			});

			// Provide exit code for pipeline/CLI integration, when in build mode
			if (isBuild) {
				process.exit(1);
			}
		}

		if (!report.errored) {
			let suffix = isBuild ? 'stylint build task succesful' : 'or we\'ve automatically fixed them';
			log(`Linter: 🔥💯🔥  No style errors found ${suffix}`);
		}
	})
	.catch(function(err) {
		console.error(err.stack);
	});
}

/**
 * compileScss
 * Compiles SCSS to CSS
 * @param {Boolean} isBuild
 */
function compileScss(isBuild) {
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
		.on('finish', function() {
			if (hasCompilerError && isBuild) {
				process.exit(1);
			}
			if (!hasCompilerError) {
				console.log('[' + getTimestamp() + '] Compiled SCSS to CSS');
			}
		});
}

/**
 * buildJekyll
 * Compile Jekyll website from source
 * @param {Boolean} isWatch - To exit main process when an error occurs in Jekyll while watching
 * @param {Array} options - Flags to pass to the jekyll process
 */
function buildJekyll(isWatch, options) {
	const arguments = ['build'].concat(options);
	const env = Object.create( process.env );
	env.packageVersion = packageJson.version;

	const jekyll = child.spawn('jekyll', arguments, { env: env });

	const jekyllLogger = (buffer) => {
		buffer.toString()
			.split(/\n/)
			.forEach((message) => log('Jekyll: ' + message));
	};

	jekyll.stdout.on('data', jekyllLogger);
	jekyll.stderr.on('data', jekyllLogger);

	if (isWatch) {
		jekyll.on('close', (code) => {
			console.log(`Jekyll process exited with code ${code}, stopping Gulp task`);
			process.exit();
		});
	}
}

/**
 * getTimestamp
 * Return current time
 */
function getTimestamp() {
	const time = new Date();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	return hours + ':' + minutes + ':' + seconds;
}

gulp.task('stylelintScss', function() {
	const isBuild = false;
	gulp.watch(scssGlobs, function() {
		return stylelintScss(isBuild);
	});
});

gulp.task('compileScss', ['stylelintScss'], function() {
	const isBuild = false;
	gulp.watch(scssGlobs, function() {
		return compileScss(isBuild);
	});
});

gulp.task('buildStylelintScss', function() {
	const isBuild = true;
	return stylelintScss(isBuild);
});

gulp.task('buildScss', ['buildStylelintScss'], function() {
	const isBuild = true;
	return compileScss(isBuild);
});

gulp.task('watchJekyll', () => {
	const isWatch = true;
	const options = [
		'--watch', // Enable auto-regeneration of the site when files are modified
		'--incremental', // Only re-build pages that have changed
	];

	return buildJekyll(isWatch, options);
});

gulp.task('buildJekyllSite', ['buildScss'], function() {
	const isWatch = false;
	const options = [];

	return buildJekyll(isWatch, options);
});

gulp.task('serveJekyll', () => {
	browserSync.init({
		files: [jekyllSiteRoot + '/**'],
		port: 4000,
		server: {
			baseDir: jekyllSiteRoot
		}
	});
});

// CLI Tasks
gulp.task('start', ['compileScss', 'watchJekyll', 'serveJekyll']);
gulp.task('build', ['buildJekyllSite']);
