'use strict';

import config  from '../config';
import gulp         from 'gulp';
import nodemon from 'gulp-nodemon';

gulp.task('nodemon', function (cb) {
	return nodemon({
	  script: 'server/bin/www'
	})
	.on('start', function () {
      cb();
  	})
	.on('restart', function () {
      console.log("restarting server");
  	});
});