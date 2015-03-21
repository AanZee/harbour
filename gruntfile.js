module.exports = function(grunt) {

	var watchFiles = {
		clientViews: ['html/**/*.html'],
		clientJS: ['js/**/*.js'],
		clientCSS: ['css/*.css'],
		clientSCSS: ['scss/**/*.scss'],		
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concurrent: {
			default: ['connect', 'watch'],
			options: {
				logConcurrentOutput: true,
				limit: 10
			}
		},
		connect: {
			all: {
				options: {
					// The server's port, and the folder to serve from:
					// Ex: 'localhost:9000' would serve up 'client/index.html'
					port: 3000,
					base:'html',
					keepalive: true
				}
			}
		},
		watch: {
			clientViews: {
				files: watchFiles.clientViews,
				options: {
					livereload: true,
				}
			},
			clientJS: {
				files: watchFiles.clientJS,
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			clientCSS: {
				files: watchFiles.clientCSS,
				tasks: ['csslint'],
				options: {
					livereload: true
				}
			},
			clientSCSS: {
				files: watchFiles.clientSCSS,
				tasks: ['sass:dev'],
				options: {
					livereload: true
				}
			}			
		},
		jshint: {
			all: {
				src: watchFiles.clientJS,
				options: {
					jshintrc: true
				}
			}
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc',
			},
			all: {
				src: watchFiles.clientCSS
			}
		},
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/style.css': 'scss/style.scss',
				}
			}
		}
	});

	// Load grunt tasks from package.json
	require('load-grunt-tasks')(grunt);

	// Default tasks
	grunt.registerTask('default', ['concurrent:default']);

};