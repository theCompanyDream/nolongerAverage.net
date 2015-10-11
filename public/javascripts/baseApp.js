var baseApp = angular.module('baseApp', ['ngRoute']);

baseApp.config(['$routeProvider', "$locationProvider",
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/story', {
				templateUrl: 'content/partials/story/experience.html',
				controller: 'experience'
			})
			.when('/events', {
				templateUrl: 'content/partials/home.html',
				controller: 'homePage'
			})
			.when('/api', {
				templateUrl: 'content/partials/ignore.html',
				controller: 'homePage'
			})
			.when('/contact', {
				templateUrl: 'content/partials/contactUs.html',
				controller: 'contactUs'
			})
			.when('/aboutme', {
				templateUrl: 'content/partials/aboutme.html',
				controller: 'aboutme'
			})
			.when('/', {
				templateUrl: 'content/partials/home.html',
				controller: 'homePage'
			});

		$locationProvider.html5Mode(true);
}]);

baseApp.controller("homePage", ["$scope", function($scope) {
	$scope.title = "Timothy Brantley super awesome website :)";
	$scope.description = "This website is here to show case my ability as a developer";
	$scope.showHeader = false;

	$scope.menus = [
	{name:"Home", location: "#"}
	,{name: "About", location: "aboutme"}
	,{name:"Events", location: "events"}
	,{name:"API", location: "api"}
	,{name:"Story", location: "story"}
	,{name: "Contact Us", location: "contact"}];

	$scope.startingPoint = "Shall we begin ?";

	$scope.toggleHeader = function () {
		console.log("i am running");
		$scope.showHeader = $scope.showHeader ? false : true;
	}

}]);