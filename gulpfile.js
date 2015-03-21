var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var csslint = require('gulp-csslint');
var csscomb = require('gulp-csscomb');
var sass = require('gulp-ruby-sass');

var watchFiles = {
	HTML: ['html/**/*.html'],
	JS: ['js/**/*.js'],
	CSS: ['css/*.css'],
	SCSS: ['scss/**/*.scss'],
	CSSComb: [
		'scss/base/**/*.scss',
		'scss/components/**/*.scss',
		'scss/layout/**/*.scss',
		'scss/pages/**/*.scss'
	],
};

gulp.task('webserver', function() {
	connect.server({
		port: 3000,
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src(watchFiles.HTML)
	.pipe(connect.reload());
});

gulp.task('jsLint', function() {
	return gulp.src(watchFiles.JS)
	.pipe(jshint())
	.pipe(jshint.reporter(jshintStylish))
	.pipe(connect.reload());
})

gulp.task('cssLint', function() {
	gulp.src(watchFiles.CSS)
	.pipe(csslint('.csslintrc'))
	.pipe(csslint.reporter());
})

gulp.task('scssCompile', function() {
	return sass('scss/') 
	.on('error', function (err) {
		console.error('Error!', err.message);
		})
	.pipe(gulp.dest('css/'))
	.pipe(connect.reload());
});

gulp.task('scssComb', function() {
	return gulp.src(watchFiles.CSSComb, { base: 'scss' })
	.pipe(csscomb())
	.pipe(gulp.dest('scss'));
});

gulp.task('watch', function() {
	gulp.watch(watchFiles.HTML, ['html']);
	gulp.watch(watchFiles.JS, ['jsLint']);
	gulp.watch(watchFiles.CSS, ['cssLint']);
	gulp.watch(watchFiles.SCSS, ['scssCompile']);
	gulp.watch(watchFiles.CSSComb, ['scssComb']);
});

gulp.task('default', ['webserver', 'watch']);