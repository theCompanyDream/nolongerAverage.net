config.$inject = ['$routeProvider', "$locationProvider"];

function config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'content/views/home.html',
			controller: 'splashPageController'
		})
		.when('/events', {
			templateUrl: 'content/views/aboutme.html',
			controller: 'notImplemented'
		})
		.when('/api', {
			templateUrl: 'content/views/aboutme.html',
			controller: 'notImplemented'
		})
		.when('/aboutme', {
			templateUrl: '/content/views/aboutMe.html',
			controller: 'aboutme'
		});

	$locationProvider.html5Mode(true).hashPrefix("!");
}

module.exports = config;