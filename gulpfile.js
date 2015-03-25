var gulp = require('gulp');
var connect = require('gulp-connect-php');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var csslint = require('gulp-csslint');
var csscomb = require('gulp-csscomb');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

var watchFiles = {
	templates: ['templates/**/*.php'],
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
		hostname: '0.0.0.0',
		port: 3000,
		livereload: true,
		keepalive: false,
		router: 'router.php'
	});
});

gulp.task('templates', function() {
	gulp.src(watchFiles.templates)
	.pipe(livereload());
});

gulp.task('jsLint', function() {
	return gulp.src(watchFiles.JS)
	.pipe(jshint())
	.pipe(jshint.reporter(jshintStylish))
	.pipe(livereload());
})

gulp.task('cssLint', function() {
	gulp.src(watchFiles.CSS)
	.pipe(csslint('.csslintrc'))
	.pipe(csslint.reporter());
})

gulp.task('scssCompile', function() {
	return sass('scss/main.scss', { sourcemap: true })
	.on('error', function (err) {
		console.error('Error!', err.message);
		})
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('css/'))
	.pipe(livereload());
});

gulp.task('scssComb', function() {
	return gulp.src(watchFiles.CSSComb, { base: 'scss' })
	.pipe(csscomb())
	.pipe(gulp.dest('scss'));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(watchFiles.templates, ['templates']);
	gulp.watch(watchFiles.JS, ['jsLint']);
	gulp.watch(watchFiles.CSS, ['cssLint']);
	gulp.watch(watchFiles.SCSS, ['scssCompile']);
	gulp.watch(watchFiles.CSSComb, ['scssComb']);
});

gulp.task('default', ['webserver', 'watch']);