'use strict';

var angular = require('angular');
var configuration = require('./homeApp/baseApp.confg');
require('angular-bootstrap');
require('angular-sanitize');

angular.module('baseApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize','app.common.Info'])
	.config(configuration);