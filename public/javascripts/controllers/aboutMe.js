angular.module("baseApp")
	.factory("resumeFactory", resumeFactory)
	.controller("aboutme", aboutMe)
	.controller("contactUs", contactUs);

resumeFactory.$inject = ['$http'];
aboutMe.$inject = ['$scope','resumeFactory'];
contactUs.$inject = ['$scope'];

function contactUs($scope, $http) {
		$scope.facebook = "https://www.facebook.com/tbrantleyII";
		$scope.lolking = "http://www.lolking.net/summoner/na/21692904";
		$scope.email = "brantleyiit@gmail.com";
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

function aboutMe($scope, resumeFactory) {
	var vm = this;
	vm.title = "";
	vm.description = "";

	resumeFactory.GET()
		.then(function (json) {
	 		var data = json.data;
	 	    $scope.title = data.title;
	 	    $scope.description = data.description;
	 	  });

}