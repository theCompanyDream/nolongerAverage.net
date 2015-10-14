angular.module('baseApp')
	.config(config);

config.$inject = ['$routeProvider', "$locationProvider"];

function config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'content/partials/home.html',
			controller: 'splashPageController'
		})
		.when('/events', {
			templateUrl: 'content/partials/aboutme.html',
			controller: 'notImplemented'
		})
		.when('/api', {
			templateUrl: 'content/partials/aboutme.html',
			controller: 'notImplemented'
		})
		.when('/contact', {
			templateUrl: 'content/partials/contactUs.html',
			controller: 'contactUs'
		})
		.when('/aboutme', {
			templateUrl: '/content/partials/aboutMe.html',
			controller: 'aboutme'
		});

	$locationProvider.html5Mode(true).hashPrefix("!");
}