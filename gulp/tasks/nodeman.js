'use strict';

var config  = require('../config');
var gulp         = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
	return nodemon({
	  script: config.serverApp
	});
});
