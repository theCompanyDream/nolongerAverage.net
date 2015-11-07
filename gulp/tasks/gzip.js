'use strict';

var config = '../config';
var gulp   = 'gulp';
var gzip   = 'gulp-gzip';

gulp.task('gzip', function() {

  return gulp.src(config.gzip.src)
    .pipe(gzip(config.gzip.options))
    .pipe(gulp.dest(config.gzip.dest));

});
