function splashPageController($scope) {
	$scope.sliderPhrases = 
	[
		"What could be here?",
		"Is this the End?",
		"Come find out what I have inside?",
		"It's bigger than you thought?"
	];

	$scope.startingPoint = "Press This";
	//seconds timer
	$scope.interval = 2000; 
}

module.exports = splashPageController;