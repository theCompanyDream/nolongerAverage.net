angular.module("baseApp")
	.controller("aboutme", aboutMe)
	.controller("contactUs", contactUs);

aboutMe.$inject = ['$scope', '$http'];
contactUs.$inject = ['$scope', '$http']

function aboutMe($scope, $http) {

	$http.get("/content/api/aboutme.json", 
		[{
			"Content-Type" : "application/json",
			"Accept" : "application/json"
		}]
	).success(function(json) {
		var data = angular.fromJson(json);
		$scope.title = data.title;
		$scope.description = data.description;
	}).error(function (err){
		console.log(err);
	});
}

function contactUs($scope, $http) {
		$scope.facebook = "https://www.facebook.com/tbrantleyII";
		$scope.lolking = "http://www.lolking.net/summoner/na/21692904";
		$scope.email = "brantleyiit@gmail.com";
}

function contactService()
{
	var service = {
		GET: GET
	};
	 
	return service;

	function GET() {

	};
}

function getResumeDetails(){

	var service = {
		GET: GET
	};

	return service;

	function GET() {

	};

}