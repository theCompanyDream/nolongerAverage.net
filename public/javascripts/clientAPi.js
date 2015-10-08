var homeApp = angular.module('resumeApp', ['ngRoute', 'experienceController']);

homeApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'content/partials/experience.html',
				controller: 'experience'
			})
			.otherwise({
				redirectTo: '/'
			});
}]);
