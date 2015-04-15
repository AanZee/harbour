/**
 * Gulpfile
 * ------------------------------------------------------
 * During development run:
 * $ gulp
 *
 * Build your project before commit:
 * $ gulp build
 */
var fs = require('fs');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var csslint = require('gulp-csslint');
var csscomb = require('gulp-csscomb');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var minimatch = require('minimatch');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var bless = require('gulp-bless');
var concat = require('gulp-concat');
var path = require('path');
var uglify = require('gulp-uglify');
var addsrc = require('gulp-add-src');

var settings = {
	/**
	 * Enable this setting to support IE9 if max selector bug
	 * A new file is created inside the dist folder called main.min.blessed.css
	 */
	isBlessed: false,

	/**
	 * Minimatch patterns to run CSSComb on
	 */
	cssComb: [
		'**/src/scss/base/**/*.scss',
		'**/src/scss/components/**/*.scss',
		'**/src/scss/layout/**/*.scss',
		'**/src/scss/pages/**/*.scss',
		'**/src/scss/vendor-overrides/**/*.scss'
	],

	/**
	 * Distribution
	 */
	dist: {
		js: 'dist/js/',
		css: 'dist/css/',
		mainMin: 'dist/css/main.min.css'
	},

	/**
	 * Source is watched
	 */
	src: {
		main: 'src/scss/main.scss',
		scss: ['src/scss/**/*.scss'],
		js: ['src/js/**/*.js'],
		jsFolder: 'src/js'
	}
};

gulp.task('jsLint', function() {
	return gulp.src(settings.src.js)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish));
})

gulp.task('cssLint', function() {
	gulp.src(settings.src.scss)
		.pipe(csslint('.csslintrc'))
		.pipe(csslint.reporter());
})

function scssCompileDev () {
	sass(settings.src.main, { sourcemap: true })
		.on('error', function (err) {
			console.error('Error!', err.message);
		})
		.pipe(sourcemaps.write())
		.pipe(gulp.dest( settings.dist.css ));
}

/**
 * Support minimatching for arrays
 * @param {array} arr
 * @param {string} match
 * @return {boolean} is matched to
 */
function isMatched (arr, match) {
	return !! arr.filter(function (item) {
		return minimatch(match, item);
	}).length;
}

/**
 * @param {string} dir
 * @return {array} directories
 */
function getFolders (dir) {
	return fs.readdirSync(dir).filter(function (file) {
		return fs.statSync(path.join(dir, file)).isDirectory();
	});
}

gulp.task('watch', function () {
	gulp.watch(settings.src.scss, function (event) {

		if ( isMatched(settings.cssComb, event.path) ) {
			// Only comb the current file if it matches to the settings
			gulp.src(event.path, { base: 'scss' })
				.pipe(plumber())
				.pipe(csscomb())
				.pipe(gulp.dest('scss'));
		}

		scssCompileDev();
	});

	gulp.watch(settings.src.js, ['jsLint']);
});

gulp.task('buildCss', function () {
	sass(settings.src.main, { sourcemap: false, style: 'compressed' })
		.on('error', function (err) {
			console.error('Error!', err.message);
			})
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest( settings.dist.css ));

	if (settings.isBlessed) {
		gulp.src(settings.dist.mainMin)
			.pipe(bless())
			.pipe(rename({ suffix: '.blessed' }))
			.pipe(gulp.dest( settings.dist.css ));
	}
});

gulp.task('buildJs', function () {
	var folders = getFolders( settings.src.jsFolder );

	var tasks = folders.map(function (folder) {
		return gulp.src([
				path.join(settings.src.jsFolder, folder, 'setup.js'),
				path.join(settings.src.jsFolder, folder, '/**/*.js'),
				// Exclude main first before appending
				path.join('!' + settings.src.jsFolder, folder, 'main.js')
			])
			.pipe( addsrc.append( path.join(settings.src.jsFolder, folder, 'main.js') ) )
			.pipe(concat(folder + '.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest( settings.dist.js ));
	});

	return merge(tasks);
});

/**
 * Does not comb your code
 */
gulp.task('build', ['cssLint', 'jsLint', 'buildCss', 'buildJs']);

gulp.task('default', ['watch']);