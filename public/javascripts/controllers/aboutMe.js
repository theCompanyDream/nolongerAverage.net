var homePage = angular.module("baseApp");

homePage.controller("aboutme", ["$scope", "$http",
	function($scope, $http){
		$scope.data;
		$http.get({
			url: '/content/api/aboutme.json'
		}).then(function success(response) {
			data = response;
		});

	}]);

homePage.controller("contactUs", ["$scope", "$http",
	function($scope, $http) {
		$scope.facebook = "https://www.facebook.com/tbrantleyII";
		$scope.lolking = "http://www.lolking.net/summoner/na/21692904";
		$scope.email = "brantleyiit@gmail.com";
	}]);