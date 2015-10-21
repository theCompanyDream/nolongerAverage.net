// var angular = require('angular');
// require('../../common/factory/resumeFactory');

// angular.module("baseApp")
// 		.controller("homePageController", homePageController)
// 		.controller("notImplemented", notImplemented)
// 		.controller("splashPageController", splashPageController)
// 		.controller("aboutme", aboutMe);

// aboutMe.$inject = ['$scope','resumeFactory', '$sce'];
// homePageController.$inject = ['$scope'];
// notImplemented.$inject = ['$scope'];
// splashPageController.$inject = ['$scope'];
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

module.exports = aboutMe;