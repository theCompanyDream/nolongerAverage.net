'use strict';

import config      from '../config';
import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';

gulp.task('browserSync', ['nodemon'], function() {

  const DEFAULT_FILE = 'index.html';
  const ASSET_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif'];

  browserSync.init({
    server: {
      baseDir: config.buildDir,
      proxy: "http://localhost:69233",
      middleware: function(req, res, next) {
        let fileHrefArray = url.parse(req.url).href.split('.');
        let fileExtension = fileHrefArray[fileHrefArray.length - 1];

        if ( ASSET_EXTENSIONS.indexOf(fileExtension) === -1 ) {
          req.url = '/' + DEFAULT_FILE;
        }

        return next();
      }
    },
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
