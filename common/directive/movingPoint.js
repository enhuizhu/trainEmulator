'use strict';

angular.module("share.module").directive("movingPoint", function(helper, svgScale) {
	return {
		restrict: "AE",
		replace: true,
		template:"<svg><g><circle class='move-p'></circle></g><svg>",
		scope: {
			data: "=",
			config: "=?",
			stopTime: "=?"
		},
		link: function(scope, element, attrs) {
			var newElement = helper.getSvgChild(element, attrs)[0].querySelectorAll("circle");
			
			var obj = {
				movingPoint: d3.select(newElement[0]),
				
				config: {
					r: 5,
					stroke: "green",
					strokeWidth: "2",
					fill:"black",
					stopTime: 3,
				},

				init: function() {
					this.setAttrs();
					this.setWatcher();
				},

				setAttrs: function() {
					this.movingPoint
						.attr("r", this.config.r)
						.attr("stroke", this.config.stroke)
						.attr("stroke-width", this.config.strokeWidth)
						.attr("fill", this.config.fill)
				},

				startAnimateWithDataSet: function(data) {
					var sortedData = _.sortBy(data, function(d) {
						return d.x;
					});

					this.animateIterate(0, data, false);
				},

				animateIterate: function(index, data, isBack) {
					var nextIndex = isBack ? index - 1 : index + 1;

					if (!data[nextIndex]) {
						isBack = !isBack;
						nextIndex = isBack ? index - 1 : index + 1;
					}
					
					var that = this;
					
					this.animateWithSingleData(data[index], data[nextIndex], function() {
						that.animateIterate(nextIndex, data, isBack);
					});
				},

				getDuration: function(start, end, speed) {
					var dis = Math.round(Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y,2))),
						t = Math.round(dis/speed);
					
					return t * 1000;
				},

				getStopTime: function() {
					if (scope.stopTime) {
						return scope.stopTime;
					}

					return this.config.stopTime;
				},

				animateWithSingleData: function(start, end, cb) {
					this.movingPoint
						.attr("cx", svgScale.getScaleX()(start.x))
						.attr("cy", svgScale.getScaleY()(start.y))
						.transition()
							.delay(this.getStopTime() * 1000)
							.duration(this.getDuration(start, end, start.v))
							.on("end", cb)
							.ease(d3.easeLinear)
							.attr("cx", svgScale.getScaleX()(end.x))
							.attr("cy", svgScale.getScaleY()(end.y));
							
				},

				setWatcher: function() {
					var that = this;
					scope.$watch("data", function(newV, oldV) {
						if (newV) {
							that.startAnimateWithDataSet(newV);
						}
					});
				}
			}

			if (scope.config) {
				_.extend(obj.config, scope.config);
			}

			obj.init();
		
		}
	}
});