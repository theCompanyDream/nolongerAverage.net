angular.module('baseApp')
	.config(config);

config.$inject = ['$routeProvider', "$locationProvider"];

function config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'content/partials/home.html',
			controller: 'splashPageController'
		})
		.when('/aboutme/:Id', {
			templateUrl: '/content/partials/aboutMe.html',
			controller: 'aboutme'
		});

	$locationProvider.html5Mode(true).hashPrefix("!");
}
