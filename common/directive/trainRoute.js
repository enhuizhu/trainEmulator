'use strict';

angular.module("share.module").directive("trainRoute", function(helper, timeHelper) {
	return {
		restrict: "AE",
		replace: true,
		scope: {
			data: "=",
			config: "=?",
			stopTime: "=",
			intervalTime: "=",
			scaleId: "="
		},
		template: '<svg><g><train-path data="data" config="config" scale-id="scaleId"></train-path>' +
			 '<g>' +
			 '	<point ng-repeat="p in data" data="p" scale-id="scaleId"></point>' +
			 '</g>' +
			 '<moving-point data="data" stop-time="stopTime" config="c.config" start-time="c.startTime" ng-repeat="c in configs" scale-id="scaleId"></moving-point>'+
			 '</g></svg>',
		link: function(scope, element, attrs) {
			helper.getSvgChild(element);
			
			scope.configs = [];
			
			var trainNumbers = timeHelper.getTrainNumbers(scope.intervalTime, scope.data, scope.stopTime, scope.scaleId);
			
			var getRandomColor = function() {
				return Math.round(Math.random() * 255);
			}

			for(var i=0; i < trainNumbers; i++) {
				var r = getRandomColor(),
					g = getRandomColor(),
					b = getRandomColor(),
					color = "rgb("+r+"," + g + "," + b +" )";


				scope.configs.push({
					startTime: i * scope.intervalTime,
					config: {
						stroke: "black",
						fill: color
					}
				});
			}
		}
	}
});

