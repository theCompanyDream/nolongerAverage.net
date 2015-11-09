angular.module("app.common.Info", ['ngRoute'])
	.factory("resumeFactory", resumeFactory);

resumeFactory.$inject = ['$http'];

function resumeFactory($http) {
		var service = {
				GETResume: function () {
					return getResInfo("/content/api/aboutme.json", $http);
				},
				GETContacts: function () {
					return getResInfo("/content/api/contact.json", $http);
				}
		};

		return service;
}

function getResInfo(location, $http)
{
	var data = $http.get(location,
			[{
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}]
			).success(success);

	function success(response){
		return response;
	}

	return data;
}
