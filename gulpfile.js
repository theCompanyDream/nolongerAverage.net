'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var wwwbin = require('./bin/www');

gulp.task('default', ['browser-sync'], function () {
});
 
gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:6923",
        files: ["public/**/*.*","views/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});
 
gulp.task('nodemon', function (cb) {
	return nodemon({
	  script: 'app.js'
	}).on('start', function () {
      cb();
  });
});
