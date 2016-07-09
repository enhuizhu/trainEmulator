'use strict';

angular.module("trainApp").directive("trainSvg", function() {
	return {
		restrict: "AE",
		replace: true,
		templateUrl: "./app/views/trainSvg.html",
		link: function(scope, element, attr) {

		}
	}
});