angular.module("baseApp")
		.controller("homePageController", homePageController)
		.controller("notImplemented", notImplemented)
		.controller("splashPageController", splashPageController)
		.controller("aboutme", aboutMe);

aboutMe.$inject = ['$scope','resumeFactory', '$sce', '$routeParams'];
homePageController.$inject = ['$scope', "$location"];
notImplemented.$inject = ['$scope'];
splashPageController.$inject = ['$scope'];

function homePageController($scope, $location) {

	$scope.title = "Timothy Brantley super awesome website :)";
	$scope.description = "This website is here to show case my ability as a developer";
	$scope.showHeader = $location.$$path == '/';
	$scope.headerImage = "/content/images/1.jpg";

	$scope.toggleHeader = function(menuItem)
	{
		$scope.showHeader = (menuItem == "Home") ? true : false;
	};

	$scope.menus = [
	 {name: "Home", location: "#"}
	,{name: "About", location: "aboutme/info"}
	,{name: "Contact Me", location: "aboutme/contact"}];

}

function notImplemented($scope) {
	$scope.title = "Sorry Not notImplemented";
}

function splashPageController($scope) {
	$scope.sliderPhrases =
	[
		"What could be here?",
		"Is this the End?",
		"Come find out what I have inside?",
		"It's bigger than you thought?"
	];

	$scope.startingPoint = "Press This";
	//seconds timer
	$scope.interval = 2000;
}

function aboutMe($scope, resumeFactory, $sce, $routeParams) {
	var vm = this;
	vm.title = "";
	vm.description = "";

	if($routeParams.Id == 'info')
		resumeFactory.GETResume()
			.then(parseJSON);
	else if($routeParams.Id = 'contact')
		resumeFactory.GETContacts()
			.then(parseJSON);

		function parseJSON(json) {
				var data = json.data;
					$scope.title = data.title;
					$scope.description = $sce.trustAsHtml(data.description)
					$scope.experience = data.experience;
			}
}
