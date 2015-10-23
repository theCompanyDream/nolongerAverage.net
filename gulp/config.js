'use strict';

export default {

  browserPort: 7000,
  UIPort: 7000,

  sourceDir: './app/',
  buildDir: './public/',
  serverDir: './',
  serverApp: './bin/www',

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'public/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'public/js'
  },

  images: {
    src: 'app/images/**/*',
    dest: 'public/images'
  },

  fonts: {
    src: ['app/fonts/**/*'],
    dest: 'public/fonts'
  },

  views: {
    index: 'app/views/*',
    src: 'app/views/**/*',
    dest: 'public/views'
  },

  gzip: {
    src: 'public/**/*.{html,xml,json,css,js,js.map,css.map,jade}',
    dest: 'public/',
    options: {}
  },

  browserify: {
    bundleName: 'app.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
