var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var Comb = require('csscomb');
var combConfig = require('./.csscomb.json');
var comb = new Comb(combConfig);

var settings = {
	src: {
		scss: ['scss/**/*.scss']
	},
	dist: {
		css: 'css/'
	},
	combExcludedGlobs: combConfig.exclude
};

function harbourLog(message) {
	gutil.log('Harbour ⚓  ' + message); // NOTE: Extra space for emoji bug(!?) in terminal
}

function compileScss(isProduction) {
	var outputStyle = isProduction ? 'compressed' : 'expanded';
	var hasCompileError = false;
	var stream = {};

	stream = gulp.src(settings.src.scss)
	    .pipe(sass({outputStyle: outputStyle}).on('error', function(error) {
			hasCompileError = true;
			sass.logError.bind(this)(error);
		}))
		.pipe(gulpif(isProduction, rename({ suffix: '.min' })))
	    .pipe(gulp.dest(settings.dist.css));

	stream.on('end', function() {
		if (!hasCompileError) {
			harbourLog('Compiled SCSS to ' + outputStyle + ' CSS');
		}
	});
}

gulp.task('watchScss', function() {
	var scssWatcher = gulp.watch(settings.src.scss, function() {
		compileScss(false);
	});

	function isExcludedPath(path) {
		var excludedPaths = settings.combExcludedGlobs;

		function matchPaths(excludePath) {
			return (path.indexOf(excludePath) >= 0);
		}

		return (excludedPaths.filter(matchPaths).length > 0);
	}

	function checkScssFile(event) {
		harbourLog('SCSS change in: ' + event.path);

		if (event.type === 'changed' && !isExcludedPath(event.path)) {
			comb.processFile(event.path);

			harbourLog('Combed: '+ event.path);
		}
	}

	scssWatcher.on('change', checkScssFile);
})

gulp.task('buildCss', function() {
	compileScss(true);
});

// CLI Tasks
gulp.task('watch', ['watchScss']);
gulp.task('build', ['buildCss']);
