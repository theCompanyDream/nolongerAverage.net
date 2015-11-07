'use strict';

var config        = require('../config');
var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var templateCache = require('gulp-angular-templatecache');

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir));

  // Process any other view files = app/views
  return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({ once: true }));

});
