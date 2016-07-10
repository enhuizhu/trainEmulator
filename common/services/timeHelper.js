'use strict';

angular.module("share.module").service("timeHelper", function(svgScale) {
	return {
		getTrainNumbers: function(trainTimeInterval, dataset, trainStopTime) {
			var sortedDataSet = _.sortBy(dataset, function(d) {
					return d.x;
				});

			var sumT = 0;

			for(var i=0; i < sortedDataSet.length - 1; i++) {
				var d = sortedDataSet[i],
					endD = sortedDataSet[i+1],
					t = this.getDurationBetweenTwoStops(d, endD, d.v);

				sumT += t + trainStopTime;
			}

			return Math.floor(sumT * 2 / trainTimeInterval);
		},

		getDurationBetweenTwoStops: function(start, end, speed) {
			var scaleX = svgScale.getScaleX(),
				scaleY = svgScale.getScaleY(),
				startX = scaleX(start.x),
				startY = scaleY(start.y),
				endX = scaleX(end.x),
				endY = scaleY(end.y),
				dis = Math.round(Math.sqrt(Math.pow(startX - endX, 2) + Math.pow(startY - endY,2))),
				t = Math.round(dis/speed);

			return t;
		}
	}
});