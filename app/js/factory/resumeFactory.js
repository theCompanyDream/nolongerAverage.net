var angular = require('angular');
require('angular-route')

angular.module("app.common.Info", ['ngRoute'])
	.factory("resumeFactory", resumeFactory);

resumeFactory.$inject = ['$http'];

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

module.exports = angular.module('resumeFactory');