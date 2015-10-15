angular.module("baseApp")
	.factory("resumeFactory", resumeFactory)
		.controller("homePageController", homePageController)
		.controller("notImplemented", notImplemented)
			.controller("splashPageController", splashPageController)
		.controller("aboutme", aboutMe);

resumeFactory.$inject = ['$http'];
aboutMe.$inject = ['$scope','resumeFactory', '$sce'];
homePageController.$inject = ['$scope'];
notImplemented.$inject = ['$scope'];
splashPageController.$inject = ['$scope'];

function homePageController($scope) {
	$scope.title = "Timothy Brantley super awesome website :)";
	$scope.description = "This website is here to show case my ability as a developer";
	$scope.showHeader = true;
	$scope.headerImage = "/content/images/1.jpg";

	$scope.toggleHeader = function(menuItem)
	{
		$scope.showHeader = (menuItem == "Home") ? true : false;
	};

	$scope.menus = [
	 {name: "Home", location: "#"}
	,{name: "About", location: "aboutme"}
	,{name: "Events", location: "events"}
	,{name: "Story", location: "novel"}
	,{name: "API", location: "api"}
	,{name: "Contact Us", location: "contact"}];

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


function resumeFactory($http) {
	function getResInfo()
	{
		return $http.get("/content/api/aboutme.json", 
				[{
					"Content-Type" : "application/json",
					"Accept" : "application/json"
				}]
				).success(success);

				function success(response){
					return response;
				}
	};
	var service = {
		GET: getResInfo
	};

	return service;
}

function aboutMe($scope, resumeFactory, $sce) {
	var vm = this;
	vm.title = "";
	vm.description = "";
	vm.Image = "";

	resumeFactory.GET()
		.then(function (json) {
	 		var data = json.data;
	 	    $scope.title = data.title;
	 	    $scope.description = $sce.trustAsHtml(data.description)
	 	    $scope.experience = data.experience;
	 	});

}
