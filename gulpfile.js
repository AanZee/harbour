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
var nodemon = require('gulp-nodemon');
var gulpif = require('gulp-if');

var settings = {

	/**
	 * Enable this setting to support IE9 if max selector bug
	 * A new file is created inside the dist folder called main.min.blessed.css
	 */
	isBlessed: false,

	/**
	 * Disable if you don't need a local server with livereload
	 */
	isLocalServerUsed: true, 

	/**
	 * Filename looked for inside js modules for dependencies
	 * contains an array with paths to js files (optionally glob patterns)
	 */
	dependenciesFilename: 'dependencies.json',

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
	},

	/**
	 * Templates for livereload
	 */
	templates: ['templates/**/*.tpl']
};

gulp.task('templates', function() {
	return gulp.src(settings.templates)
		.pipe(gulpif(settings.isLocalServerUsed, livereload()));
});

gulp.task('jsLint', function() {
	return gulp.src(settings.src.js)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish))
		.pipe(gulpif(settings.isLocalServerUsed, livereload()));
});

gulp.task('cssLint', ['buildCss'], function() {
	return gulp.src(settings.dist.mainMin)
		.pipe(csslint('.csslintrc'))
		.pipe(csslint.reporter());
});

gulp.task('cssBlessed', ['buildCss'], function() {
	if (settings.isBlessed) {
		return gulp.src(settings.dist.mainMin)
			.pipe(bless())
			.pipe(rename({ suffix: '.blessed' }))
			.pipe(gulp.dest( settings.dist.css ));
	}
});

function scssCompileDev () {
	sass(settings.src.main, { sourcemap: true })
		.on('error', function (err) {
			console.error('Error!', err.message);
		})
		.pipe(sourcemaps.write())
		.pipe(gulp.dest( settings.dist.css ))
		.pipe(gulpif(settings.isLocalServerUsed, livereload()));
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
	if (settings.isLocalServerUsed) {
		livereload.listen();
	}

	gulp.watch(settings.src.scss, function (event) {

		if ( isMatched(settings.cssComb, event.path) ) {
			// [Using event.path for source and destination](https://github.com/gulpjs/gulp/issues/212)
			// Split the filename from the path.
			var filename = event.path.split('/');
			filename = filename[filename.length - 1];
			// For some reason it does need a base to work
			var base = event.path.replace(filename, '');

			// Only comb the current file if it matches to the settings
			gulp.src(event.path, { base: base })
				.pipe(plumber())
				.pipe(csscomb())
				.pipe(gulp.dest( base ));
		}

		scssCompileDev();
	});

	gulp.watch(settings.src.js, ['jsLint']);
	gulp.watch(settings.templates, ['templates']);
});


gulp.task('buildCss', function () {
	return sass(settings.src.main, { sourcemap: false, style: 'compressed' })
		.on('error', function (err) {
			console.error('Error!', err.message);
			})
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest( settings.dist.css ));

});

gulp.task('buildJs', function () {
	var folders = getFolders( settings.src.jsFolder );

	var tasks = folders.map(function (folder) {
		// Set paths
		var setupPath = path.join(settings.src.jsFolder, folder, 'setup.js');
		var jsFilesPath = path.join(settings.src.jsFolder, folder, '/**/*.js');
		var mainPath = path.join(settings.src.jsFolder, folder, 'main.js');
		var dependenciesPath = path.join(settings.src.jsFolder, folder, settings.dependenciesFilename);

		// Check for dependencies.json
		if ( fs.existsSync( dependenciesPath ) ) {
			// Load dependencies first
			var dependencies = JSON.parse( fs.readFileSync( dependenciesPath, 'utf8') );
		} else {
			// Init an empty array so gulp can continue
			var dependencies = [];
		}

		return gulp.src([
				setupPath,
				jsFilesPath,
				// Exclude main first before appending
				path.join('!' + mainPath)
			])
			.pipe( addsrc.prepend( dependencies ))
			.pipe( addsrc.append( mainPath ) )
			.pipe(concat(folder + '.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest( settings.dist.js ));
	});

	return merge(tasks);
});

gulp.task('serve', function () {
	if (settings.isLocalServerUsed) {
		nodemon({
			script: 'index.js',
			ext: 'js html tpl json'
		}).on('readable', function() {
			this.stdout.on('data', function(chunk) {
				if (/^listening/.test(chunk)) {
					livereload.reload();
				}
				process.stdout.write(chunk);
			});
		});
	}
});

/**
 * Does not comb your code
 */
gulp.task('build', ['jsLint', 'cssLint', 'cssBlessed', 'buildJs']);

gulp.task('default', ['watch', 'serve']);