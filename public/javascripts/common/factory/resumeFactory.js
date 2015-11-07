angular.module("app.common.Info", ['ngRoute'])
	.factory("resumeFactory", resumeFactory);

resumeFactory.$inject = ['$http'];

function resumeFactory($http) {
	function getResInfo(location)
	{
		return $http.get(location,
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
			GETResume: function () {
				return getResInfo("/content/api/aboutme.json");
			},
			GETContacts: function () {
				return getResInfo("/content/api/contact.json");
			}
			};

			return service;
}
