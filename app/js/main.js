var angular = require('angular');
require('angular-bootstrap');
require('angular-sanitize');
require('./factory/resumeFactory');

var configuration = require('./baseApp.config');
var homePageController = require('./controllers/homePage');
var aboutPageController = require('./controllers/aboutMe');
var splashPageController = require('./controllers/splashPage');
var contactUsController = require('./controllers/contactUs');
var notImplemented = require('./controllers/notImplemented');

angular.module('baseApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize','app.common.Info'])
		.controller("homePageController", homePageController)
		.controller("aboutme", aboutPageController)
		.controller("notImplemented", notImplemented)
		.controller("splashPageController", splashPageController)
		.controller("aboutme", aboutMe)
		.config(configuration);
