angular.module('baseApp')
	.config(config);

config.$inject = ['$routeProvider', "$locationProvider"];

function config($routeProvider, $locationProvider) {

	var aboutMeObj = {
		templateUrl: '/content/partials/aboutMe.html',
		controller: 'aboutmeController'
	};

	$routeProvider
		.when('/', {
			templateUrl: '/content/partials/home.html',
			controller: 'splashPageController'
		})
		.when('/resume', {
			templateUrl: '/content/partials/resume.html',
			controller: 'resumeController'
		})
		.when('/aboutme/:Id', aboutMeObj)
		.when('/about/:Id', aboutMeObj);

	$locationProvider.html5Mode(true).hashPrefix("!");
}
