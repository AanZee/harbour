const stylelint = require('stylelint');
const util = require('util');
let fixLintingErrors = process.env.FIXLINT ? true : false;

stylelint.lint({
	files: [
		'scss/**/*.scss',
	],
	configFile: 'scss/.stylelintrc.json',
	fix: fixLintingErrors
})
	.then(function(data) {

		// If there is at least one error
		if (data.errored) {

			// We only need do to something with the files that have at least one error
			let errorFiles = data.results.filter(file => file.errored);

			// We only want to show source and warnings
			let errorOutput = errorFiles.map((file) => {
				errorMessage = {
					source: file.source,
					warnings: file.warnings
				}
				return errorMessage;
			});

			console.log('💩  Style errors found:', util.inspect(errorOutput, { depth: 4 }));

			// Provide exit code for pipeline/CLI integration, when not in watchmode
			if (!process.env.WATCHLINT) {
				process.exit(1);
			}
			console.log('⏰  Waiting for changes...');
		}

		if (!data.errored) {
			console.log('🎉  No style errors found');

			if (process.env.FIXLINT) {
				console.log('or we have fixed them...');
			}
		}

	})
	.catch(function(err) {
		console.error(err.stack);
	});
