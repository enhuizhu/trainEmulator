'use strict';

angular.module("share.module").directive("trainPath", function() {
	return {
		restrict: "AE",
		replace: true,
		templateUrl: "./views/trainPath.html",
		scope: {
			data: "="
		},

		controller: function() {
		
		},

		link: function(scope, element, attr) {
		}
	}

});
