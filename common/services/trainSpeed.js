'use strict';

angular.module("share.module").service("trainSpeed", function(svgScale) {
	return {
		convertTrainSpeedToPx: function(trainSpeed) {
			var latitudeZeroToOne = 111*1000,
				latitudeSpeed = 1 / (latitudeZeroToOne / trainSpeed);
			/**
			* tranin speed is n m/second
			**/
			var scaleX = svgScale.getScaleX(),
				domain = scaleX.domain(),
				range = scaleX.range(),
				domainDis = Math.abs(domain[0] - domain[1]),
				rangeDis = Math.abs(range[0] - range[1]),
				rate = rangeDis / domainDis;

		     return latitudeSpeed * rate;
		}
	}
});