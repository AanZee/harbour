var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var Comb = require('csscomb');
var combConfig = require('./.csscomb.json');

var combExcludedGlobs = combConfig.exclude;
var comb = new Comb(combConfig);

var scssSourceFolder = ['**/*.scss'];
var scssSourceFile = './harbour.scss';
var cssDist = './';

/**
 * Compile SCSS to CSS
 * @return {void}
 */
function compileScss() {
	var hasCompileError = false;
	var stream = {};

	stream = gulp.src(scssSourceFile)
	    .pipe(sass({outputStyle: 'expanded'}).on('error', function(error) {
			hasCompileError = true;
			sass.logError.bind(this)(error);
		}))
	    .pipe(gulp.dest(cssDist));

	stream.on('end', function() {
		if (!hasCompileError) {
			gutil.log('Compiled SCSS to CSS');
		}
	});
}

gulp.task('watchScss', function() {
	var scssWatcher = gulp.watch(scssSourceFolder, function() {
		compileScss(false);
	});

	/**
	 * Checks if the inserted path occurs in the exclude array inside the csscomb.json file
	 * @param {string} path - A file or folder path
	 * @return {Boolean} - Is the checked file excluded
	 */
	function isExcludedPath(path) {
		var excludedPaths = combExcludedGlobs;

		function matchPaths(excludePath) {
			return (path.indexOf(excludePath) >= 0);
		}

		return (excludedPaths.filter(matchPaths).length > 0);
	}

	/**
	 * Checks if the changed file needs to be combed
	 * @param {object} event - Gulp event
	 * @return {void}
	 */
	function checkScssFile(event) {
		gutil.log('Harbour ⚓  ---------------------------------------------------------'); // NOTE: Extra space after emoji to fix emoji (bug!?) in terminal
		gutil.log('Change in: ' + event.path);

		if (event.type === 'changed' && !isExcludedPath(event.path)) {
			comb.processFile(event.path);
			gutil.log('Combed: '+ event.path);
		}
	}

	scssWatcher.on('change', checkScssFile);
})

// CLI Tasks
gulp.task('watch', ['watchScss']);
