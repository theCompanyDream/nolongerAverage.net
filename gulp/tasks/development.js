'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

// gulp.task('dev', ['clean'], function(cb) {
//
//   global.isProd = false;
//
//   runSequence(['styles', 'images', 'fonts', 'views','browserify', 'browserSync', 'nodemon'], 'watch', cb);
//
// });

module.exports = function(cb) {

  global.isProd = false;

  runSequence(['styles', 'images', 'fonts', 'views','browserify', 'browserSync', 'nodemon'], 'watch', cb);

);
