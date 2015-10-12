angular.module('baseApp', ['ngRoute', 'ui.bootstrap'])
	.controller("homePage", homePageController)
		.controller("notImplemented", notImplemented);

homePageController.$inject = ['$scope'];
notImplemented.$inject = ['$scope'];

function homePageController($scope) {
	console.log("running");
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
	 {name: "Home", location: "#"}
	,{name: "About", location: "aboutme"}
	,{name: "Events", location: "events"}
	,{name: "Story", location: "novel"}
	,{name: "API", location: "api"}
	,{name: "Contact Us", location: "contact"}];
}

function notImplemented($scope) {
	console.log("running");
	$scope.title = "Sorry Not notImplemented";
}