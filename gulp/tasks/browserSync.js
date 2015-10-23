'use strict';

import config      from '../config';
import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';

gulp.task('browserSync', function() {

  const DEFAULT_FILE = 'index.html';
  const ASSET_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif'];

  browserSync.init({
    proxy: "http://localhost:6923",
    browser: "google chrome",
  	port: config.browserPort,
  	ui: {
    	port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});
