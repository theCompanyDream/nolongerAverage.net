var homeApp = angular.module('resumeApp', ['ngRoute', 'experienceController']);

homeApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'content/partials/ignore.html',
				controller: 'experience'
			})
			.otherwise({
				redirectTo: '/'
			});
}]);
