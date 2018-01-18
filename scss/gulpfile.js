var gulp = require('gulp');
var gutil = require('gulp-util');
var Comb = require('csscomb');
var combConfig = require('./.csscomb.json');

var combExcludedGlobs = combConfig.exclude;
var comb = new Comb(combConfig);

var scssSourceFolder = ['**/*.scss'];

gulp.task('watchScss', function() {
	var scssWatcher = gulp.watch(scssSourceFolder);

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
