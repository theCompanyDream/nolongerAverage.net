'use strict';

var angular = require('angular');
require('angular-bootstrap');
require('angular-sanitize');
require('/factory/resumeFactory')

var configuration = require('./baseApp.config');
var homePageController = require('/controller/homePage');
var aboutPageController = require('/controller/aboutMe');
var splashPageController = require('/controller/splashPage');
var contactUsController = require('/controller/contactUs');
var notImplemented = require('/controller/notImplemented');

angular.module('baseApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize','app.common.Info'])
		.controller("homePageController", homePageController)
		.controller("aboutme", aboutPageController)
		.controller("notImplemented", notImplemented)
		.controller("splashPageController", splashPageController)
		.controller("aboutme", aboutMe)
		.config(configuration);