var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var open = require('gulp-open');
var postcss = require('gulp-postcss');
var postcssScssParser = require('postcss-scss');
var postcssReporter = require('postcss-reporter');
var autoprefixer = require('autoprefixer');
var tildeImporter = require('node-sass-tilde-importer');
var stylelint = require('stylelint');

var harbourStylelintJson = '.stylelintrc.json';

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
var cssFolder = 'css/';

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
})

gulp.task('compileScss', ['stylelintScss'], function() {
	var isBuild = false;
	gulp.watch(scssGlobs, function() {
		return compileScss(isBuild);
	});
})

gulp.task('buildStylelintScss', function() {
	var isBuild = true;
	return stylelintScss(isBuild);
})

gulp.task('buildScss', ['buildStylelintScss'], function() {
	var isBuild = true;
	return compileScss(isBuild);
})

gulp.task('serve', function () {
	return nodemon({
		script: 'styleguide/index.js',
		ext: 'css js tpl'
	});
});

gulp.task('openBrowser', function(){
	gulp.src(__filename)
		.pipe(open({uri: 'http://localhost:3000'}));
});

// CLI Tasks
gulp.task('start', ['serve', 'openBrowser', 'compileScss']);
gulp.task('build', ['buildScss']);
