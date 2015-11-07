'use strict';


var url         = require('url');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

module.exports = browserSync;


function browserSync() {

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
  }

// gulp.task('browserSync', );
//
// });
