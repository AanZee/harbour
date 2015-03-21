var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var csslint = require('gulp-csslint');
var sass = require('gulp-ruby-sass');

var watchFiles = {
	HTML: ['html/**/*.html'],
	JS: ['js/**/*.js'],
	CSS: ['css/*.css'],
	SCSS: ['scss/**/*.scss'],		
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

gulp.task('js', function() {
	return gulp.src(watchFiles.JS)
	.pipe(jshint())
	.pipe(jshint.reporter(jshintStylish))
	.pipe(connect.reload());
})

gulp.task('css', function() {
	gulp.src(watchFiles.CSS)
	.pipe(csslint())
	.pipe(csslint.reporter());
})

gulp.task('scss', function() {
	return sass('scss/') 
	.on('error', function (err) {
		console.error('Error!', err.message);
		})
	.pipe(gulp.dest('css/'))
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(watchFiles.HTML, ['html']);
	gulp.watch(watchFiles.JS, ['js']);
	gulp.watch(watchFiles.CSS, ['css']);
	gulp.watch(watchFiles.SCSS, ['scss']);
});

gulp.task('default', ['webserver', 'watch']);