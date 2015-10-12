angular.module('baseApp', ['ngRoute', 'ui.bootstrap'])
	.config(['$routeProvider', "$locationProvider", configureRoutes])
		.controller("homePage", ["$scope", homePageController])
			.controller("notImplemented", ["$scope", notImplemented]);

function configureRoutes($routeProvider, $locationProvider) {
	$routeProvider
		.when('/story', {
			templateUrl: 'content/partials/story/aboutme.html',
			controller: 'notImplemented'
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
		})
		.when('/', {
			templateUrl: 'content/partials/home.html',
			controller: 'homePage'
		});

	$locationProvider.html5Mode(true).hashPrefix("!");
}

function homePageController($scope) {

	$scope.title = "Timothy Brantley super awesome website :)";
	$scope.description = "This website is here to show case my ability as a developer";
	$scope.showHeader = true;
	$scope.headerImage = "/content/images/1.jpg";

	$scope.toggleHeader = function(menuItem)
	{
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
	,{name:"Story", location: "story"}
	,{name:"Events", location: "events"}
	,{name:"API", location: "api"}
	,{name: "Contact Us", location: "contact"}];
}

function notImplemented($scope) {
		console.log("totally running");
		$scope.title = "Sorry Not notImplemented";
}