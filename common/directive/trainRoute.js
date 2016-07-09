'use strict';

angular.module("share.module").directive("trainRoute", function(helper) {
	return {
		restrict: "AE",
		replace: true,
		scope: {
			data: "=",
			config: "=?",
			trainStopTime: "="
		},
		template: '<svg><g><train-path data="data" config="config.pathConfig"></train-path>' +
			 '<g>' +
			 '	<point ng-repeat="p in data" data="p"></point>' +
			 '</g>' +
			 '<moving-point data="data" stop-time="trainStopTime"></moving-point></g></svg>',
		link: function(scope, element, attrs) {
			helper.getSvgChild(element);
		}
	}
});

