'use strict';

var gulp = require('gulp');
var fs = require('fs');
var util = require('./util');
var config = require('./config');

const tasks = fs.readdirSync('./gulp/tasks/').filter(util.script);

tasks.forEach((task) => {
  require('./tasks/' + task);
});
