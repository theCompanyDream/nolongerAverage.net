'use strict';

import config  from '../config';
import gulp         from 'gulp';
import nodemon from 'gulp-nodemon';

gulp.task('nodemon', function (cb) {
	return nodemon({
	  script: config.serverApp
	});
});