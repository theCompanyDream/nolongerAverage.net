'use strict';

var config = require('../config');
var gulp   = require('gulp');
var del    = require('del');

module.exports = clean;

function clean(config, cb) {

  del([config.buildDir], cb);

});


// gulp.task('clean', function(cb) {
//
//   del([config.buildDir], cb);
//
// });
