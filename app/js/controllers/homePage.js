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

module.exports = homePageController;