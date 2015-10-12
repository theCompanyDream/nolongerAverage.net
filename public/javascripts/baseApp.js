var baseApp = angular.module('baseApp', ['ngRoute', 'ui.bootstrap']);

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
				templateUrl: 'content/partials/aboutMe.html',
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
	$scope.showHeader = true;
	$scope.headerImage = "/content/images/1.jpg";

	$scope.toggerHeader = function(menuItem)
	{
		console.log(menuItem);
		$scope.showHeader = (menuItem == "Home") ? true : false;
	}

	$scope.sliderPhrases = 
	[
		"What could be here?",
		"Is this the End?",
		"Come Find out what I have inside?",
		"It's bigger than you thought?"
	];

	$scope.startingPoint = "Press This";
	//seconds timer
	$scope.interval = 3000; 

	$scope.menus = [
	{name:"Home", location: "#"}
	,{name: "About", location: "aboutme"}
	,{name:"Events", location: "events"}
	,{name:"API", location: "api"}
	,{name:"Story", location: "story"}
	,{name: "Contact Us", location: "contact"}];
}]);