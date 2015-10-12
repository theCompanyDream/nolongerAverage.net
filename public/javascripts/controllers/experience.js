var experienceControllers = angular.module('storyModule', []);

experienceControllers.controller('experience', ['$scope', '$routeParams','$http',
	function($scope, $routeParams, $http) {
		$http.get('/content/api/story.json')
			.success(function (data) {
				$scope.author = data.author;
				$scope.name = data.name;
			});
	}]);