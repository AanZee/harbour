var browserSync = require('browser-sync').create();
var child = require('child_process');
var gulp = require('gulp');
var sass = require('gulp-sass');
var open = require('gulp-open');
var postcss = require('gulp-postcss');
var gutil = require('gulp-util');
var postcssScssParser = require('postcss-scss');
var postcssReporter = require('postcss-reporter');
var autoprefixer = require('autoprefixer');
var tildeImporter = require('node-sass-tilde-importer');
var stylelint = require('stylelint');

var harbourStylelintJson = '.stylelintrc.json';

var jekyllSiteRoot = '_gh_pages';

var scssIndex = 'scss/index.scss';
var scssGlobs = 'scss/**/*.scss';
var stylelintGlobs = [
	'scss/components/*.scss',
	'scss/controls/*.scss',
	'scss/layouts/*.scss',
	'scss/reset/*.scss',
	'scss/themes/*.scss',
	'scss/vendor-overrides/*.scss',
	'!scss/**/index.scss'
];
var cssFolder = 'site/css/';

/**
 * stylelintScss
 * Check if there are any stylelint errors in the SCSS
 * @param {Boolean} isBuild
 */
function stylelintScss(isBuild) {
	return gulp.src(stylelintGlobs)
		.pipe(postcss(
			[
				stylelint({
					configFile: harbourStylelintJson
				}),
				postcssReporter(
					{
						clearAllMessages: true,
						throwError: isBuild
					}
				)
			],
			{
				syntax: postcssScssParser
			}
		)).on('error', function (error) {
			console.log('Error in stylelintScss(): ', error);
			if (isBuild) {
				process.exit(1);
			}
		});
}

/**
 * compileScss
 * Compiles SCSS to CSS
 * @param {Boolean} isBuild
 */
function compileScss(isBuild) {
	var outputStyle = isBuild ? 'compressed' : 'expanded';
	var hasCompilerError = false;

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
 * getTimestamp
 * Return current time
 */
function getTimestamp() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	return hours + ':' + minutes + ':' + seconds;
}

gulp.task('stylelintScss', function() {
	var isBuild = false;
	gulp.watch(scssGlobs, function() {
		return stylelintScss(isBuild);
	});
});

gulp.task('compileScss', ['stylelintScss'], function() {
	var isBuild = false;
	gulp.watch(scssGlobs, function() {
		return compileScss(isBuild);
	});
});

gulp.task('buildStylelintScss', function() {
	var isBuild = true;
	return stylelintScss(isBuild);
});

gulp.task('buildScss', ['buildStylelintScss'], function() {
	var isBuild = true;
	return compileScss(isBuild);
});

gulp.task('watchJekyll', () => {
	var jekyll = child.spawn('jekyll', ['build',
		'--watch',
		'--incremental',
		'--drafts',
	]);

	var jekyllLogger = (buffer) => {
		buffer.toString()
			.split(/\n/)
			.forEach((message) => gutil.log('Jekyll: ' + message));
	};

	jekyll.stdout.on('data', jekyllLogger);
	jekyll.stderr.on('data', jekyllLogger);
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
gulp.task('build', ['buildScss']);
