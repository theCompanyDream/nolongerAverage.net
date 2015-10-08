var experienceControllers = angular.module('experienceController', []);

experienceControllers.controller('experience', ['$scope', '$routeParams','$http',
	function($scope, $routeParams, $http) {
		$http.get('/content/api/story.json')
			.success(function (data) {
				$scope.author = data.author;
				$scope.name = data.name;
			});
	}]);