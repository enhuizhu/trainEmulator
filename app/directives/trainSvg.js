'use strict';

angular.module("trainApp").directive("trainSvg", function(svgScale, trainSpeed) {
	return {
		restrict: "AE",
		replace: true,
		scope: {
			config: "=",
		},
		templateUrl: "./app/views/trainSvg.html",
		
		controller: function($scope, $element) {
			var datas = [];
			
			$scope.scaleId = _.uniqueId("scale");
				
			var newScale = svgScale.get($scope.scaleId);

			$scope.config.datas.map(function(v, k) {
				datas = datas.concat(v.data);
			});

			newScale.setScaleX(datas, $scope.config.margin, $scope.config.svgSize.width);
			newScale.setScaleY(datas, $scope.config.margin, $scope.config.svgSize.height);

			if ($scope.config.convertSpeed) {
				$scope.config.datas.map(function(route) {
					route.data.map(function(item) {
						item.v = trainSpeed.convertTrainSpeedToPx(item.v, $scope.scaleId);
					});
				});
			}
		},

		link: function(scope, element, attr) {
		
		}
	}
});