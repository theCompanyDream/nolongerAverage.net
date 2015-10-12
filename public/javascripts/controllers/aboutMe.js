var homePage = angular.module("baseApp");

homePage.service('userInfoService',["$http", function($http){
	this.GET = function(data) {
		$http.get({
			url: 'http://localhost:7000/content/api/aboutme.json'
		}).success(function(json) {
			console.log(json);
			data(json);
		}).error(function (err){
			console.log(err);
		});
	}
}]);

homePage.controller("aboutme", ["$scope", "$http",
	function($scope, $http){
		$http.get("/content/api/aboutme.json", []
		).success(function(json) {
			console.log(json);
			$scope.data = json;
		}).error(function (err){
			console.log(err);
		});
}]);

homePage.controller("contactUs", ["$scope",
	function($scope, $http) {
		$scope.facebook = "https://www.facebook.com/tbrantleyII";
		$scope.lolking = "http://www.lolking.net/summoner/na/21692904";
		$scope.email = "brantleyiit@gmail.com";
}]);