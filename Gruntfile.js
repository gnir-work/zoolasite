// Generated on 2014-02-03 using generator-webapp 0.4.7
'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	var options = {
		// Project settings
		paths: {
			// Configurable paths
			app: 'app',
			dist: 'dist'
		}
	};

	// Define the configuration for all the tasks
	grunt.initConfig({
		wiredep:{
			target:{
				src:'views/index.ejs'
			},
			options:{
				ignorePath: '../public/'
			}
		},
		watch: {
			livereload: {
				options: { livereload: true },
				files: ['views/*', 'public/**']
			}
		},
		express:{
			all:{
				options:{
					port:9000,
					script: 'server.js'
				}
			}
		}, open:{
			dev: {
				path:'http://127.0.0.1:9000',
				app: 'iceweasel'
			}
		},
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					expand: true,                  // Enable dynamic expansion
					cwd: 'public/images',                   // Src matches are relative to this path
					src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
					dest: 'dist/public/images'                  // Destination path prefix
				}]
			}
		},
		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			app: {
				files: {
					'tmp/app.js' : ['public/app.module.js', 'public/app.config.js',  'public/app.controller.js'],
					'tmp/gallery.js' : ['public/gallery/gallery.module.js', 'public/gallery/gallery.controller.js',  'public/gallery/gallery.component.js'],
					'tmp/prices.js' : ['public/prices/prices.module.js', 'public/prices/prices.controller.js',  'public/prices/prices.component.js'],
					'tmp/main.js' : ['public/main/main.module.js', 'public/main/main.controller.js',  'public/main/main.component.js']
				}
			}

		},
		concat: {
			js:{
				src:['tmp/*.js'],
				dest: 'tmp/costumeJs.js'
			}
		},
		uglify: {
			js: {
				src: 'tmp/costumeJs.js',
				dest: 'dist/public/costumeJs.js'
			}
		},
		cssmin: {
			target: {
				files: [{
					src: 'tmp/costumeCss.css',
					dest: 'dist/public/costumeCss.css'
				}]
			}
		},
		processhtml: {
			dist: {
				files: {
					'tmp/index.ejs' : ['views/index.ejs'],
					'tmp/gallery-page.html' : ['public/gallery/gallery-page.html'],
					'tmp/prices-page.html' : ['public/prices/prices-page.html'],
					'tmp/main-page.html' : ['public/main/main-page.html']
				}
			}
		},
		htmlmin:{
			dist: {                                      // Target
				options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: {                                   // Dictionary of files
					'dist/views/index.ejs': 'tmp/index.ejs',     // 'destination': 'source'
					'dist/public/gallery/gallery-page.html': 'tmp/gallery-page.html',
					'dist/public/prices/prices-page.html': 'tmp/prices-page.html',
					'dist/public/main/main-page.html': 'tmp/main-page.html'
				}
			}
		},
		copy: {
			main:{
				expand: true,
				src: ['public/loaders/*','public/fonts/*','routers/*', 'api/**', 'etc/*', 'utils/*', 'app.js', 'server.js', 'public/bower_components/ngmap/build/scripts/ng-map.min.js', 'public/bower_components/parallax.js/parallax.min.js', 'public/css/*'],
				dest: 'dist/'
			}

		}
	});

	grunt.registerTask('run',[
		'express',
		'open:dev',
		'watch'
	]);
	grunt.registerTask('build',[
		'imagemin',
		'ngAnnotate',
		'concat',
		'uglify',
		'processhtml',
		'htmlmin',
		'copy'
	])

};
