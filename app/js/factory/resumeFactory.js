var name = 'app.common.Info';

var angular = require('angular');
require('angular-ui-router');

angular.module(name, ['ngRoute'])
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
	}

	var service = {
		GET: getResInfo
	};

	return service;
}

module.exports = angular.module(name);