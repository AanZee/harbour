const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const child = require('child_process');
const gulp = require('gulp');
const log = require('fancy-log');
const postcss = require('gulp-postcss');
const postcssReporter = require('postcss-reporter');
const postcssScssParser = require('postcss-scss');
const sass = require('gulp-sass');
const stylelint = require('stylelint');
const tildeImporter = require('node-sass-tilde-importer');
const packageJson = require('./package.json');

const harbourStylelintJson = '.stylelintrc.json';

// First we define all scss files to watch. Not all watched files need linting, so we define a second glob
const scssGlobs = 'scss/**/*.scss';
const stylelintGlobs = [
	'scss/components/*.scss',
	'scss/controls/*.scss',
	'scss/layouts/*.scss',
	'scss/reset/*.scss',
	'scss/themes/*.scss',
	'scss/vendor-overrides/*.scss',
	'!scss/**/index.scss'
];
const scssIndex = 'scss/index.scss';

// Compiled css is placed in Jekyll source folder.
const cssFolder = 'site/css/';
// Destination for build Jekyll site.
const jekyllSiteRoot = '_gh_pages';

/**
 * stylelintScss
 * Check if there are any stylelint errors in the SCSS
 * @param {Boolean} isBuild
 */
const stylelintScss = (isBuild) => {
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
			log('Error in stylelintScss(): ', error);
			if (isBuild) {
				process.exit(1);
			}
		});
};

/**
 * compileScss
 * Compiles SCSS to CSS
 * @param {Boolean} isBuild
 */
const compileScss = (isBuild) => {
	const outputStyle = isBuild ? 'compressed' : 'expanded';
	let hasCompilerError = false;
	log('compileScss 4');
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
				log('Compiled SCSS to CSS');
			}
		});
};

/**
 * buildJekyll
 * Compile Jekyll website from source
 * @param {Array} options - Flags to pass to the jekyll process
 */
const buildJekyll = (options) => {
	const arguments = ['build'].concat(options);
	const env = Object.create( process.env );
	env.packageVersion = packageJson.version;

	return child.spawn('jekyll', arguments, { env: env });
};

/**
 * jekyllLogging
 * Watch jekyll process and output log
 * @param jekyll - The jekyll process
 */
const jekyllLogging = (jekyll) => {
	const logger = (buffer) => {
		buffer.toString()
			.split(/\n/)
			.forEach((message) => log('Jekyll: ' + message));
	};

	jekyll.stdout.on('data', logger);
	jekyll.stderr.on('data', logger);
};

gulp.task('stylelintScss', function() {
	const isBuild = false;
	gulp.watch(scssGlobs, function() {
		log('compileScss 3');
		return stylelintScss(isBuild);
	});
});

gulp.task('compileScss', gulp.series('stylelintScss', () => {
	const isBuild = false;
	log('compileScss');
	gulp.watch(scssGlobs, function() {
		log('compileScss 2');
		return compileScss(isBuild);
	});
}));

gulp.task('buildStylelintScss', function() {
	const isBuild = true;
	return stylelintScss(isBuild);
});

gulp.task('buildScss', gulp.series('buildStylelintScss', (done) => {
	const isBuild = true;
	compileScss(isBuild);
	done();
}));

gulp.task('watchJekyll', () => {
	const jekyll = buildJekyll(['--watch']);

	jekyllLogging(jekyll);

	jekyll.on('close', (code) => {
		log(`Jekyll process exited with code ${code}, stopping Gulp task`);
		return process.exit();
	});
});

gulp.task('buildJekyllSite', gulp.series('buildScss', (done) => {
	const jekyll = buildJekyll([]);

	jekyllLogging(jekyll);

	done();
}));

gulp.task('serveJekyll', (done) => {
	browserSync.init({
		files: [jekyllSiteRoot + '/**'],
		port: 4000,
		server: {
			baseDir: jekyllSiteRoot
		}
	});
	done();
});

// CLI Tasks
gulp.task('start', gulp.parallel('compileScss', 'watchJekyll', 'serveJekyll'));
gulp.task('build', gulp.parallel('buildJekyllSite'));
