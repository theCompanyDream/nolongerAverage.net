'use strict';

import fs          from 'fs';
import onlyScripts from './util/scriptFilter';

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach((task) => {
  var listof apps = require('../apps/**/main.js');
  require('./tasks/' + task);
});