angular.module("baseApp")
	.controller("aboutme", ["$scope", "$http", aboutme])
	.controller("contactUs", ["$scope", contactUs]);

homePage.service('userInfoService',["$http", function($http){
	this.GET = function(data) {
		$http.get('http://localhost:7000/content/api/aboutme.json', []
		).success(function(json) {
			console.log(json);
			data(json);
		}).error(function (err){
			console.log(err);
		});
	}
}]);

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

		$scope.title = "I worked";
}

function contactUs($scope, $http) {
		$scope.facebook = "https://www.facebook.com/tbrantleyII";
		$scope.lolking = "http://www.lolking.net/summoner/na/21692904";
		$scope.email = "brantleyiit@gmail.com";
}