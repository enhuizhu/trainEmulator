'use strict';

angular.module("share.module").directive("point", function(svgScale) {
	return {
		restrict: "AE",
		replace: true,
		template: '<g>'+
				'<circle class="out-circle"></circle><circle class="in-circle"></circle>'+
				'<text x="0" y="15" fill="red">test</text>'+
			'</g>',
		scope: {
			data: "=",
			config: "=?",
			scaleId: "="
		},

		link: function(scope, element, attrs) {
			var newScale = svgScale.get(scope.scaleId);

			var obj = {
				point: d3.select(element[0]).select(".in-circle"),
				text: d3.select(element[0]).select("text"),

				config: {
					r: 4,
					stroke: "red",
					strokeWidth: 2,
					fill: "none",

					out: {
						stroke: "blue",
						strokeWidth: 2,
						fill: "none"
					},

					text: {
						fill: "black"
					}
				},

				init: function() {
					this.setAttrs();
					this.setUpWatcher();
				},

				setAttrs: function() {
					this.point
						.attr("stroke", this.config.stroke)
						.attr("r", this.config.r)
						.attr("stroke-width", this.config.strokeWidth)
						.attr("fill", this.config.fill)

					this.text
						.attr("fill", this.config.text.fill);

				},

				getTextXpos: function(x) {
					//get text width 
					var textWidth = this.text.node().getBBox().width,
						scaleX = newScale.getScaleX(),
						currentX = scaleX(x) + this.config.r + 2,
						range = scaleX.range(),
						maxX = d3.max(range),
						minX = d3.min(range);

					if(currentX + textWidth > maxX){
						currentX = scaleX(x) - this.config.r - textWidth - 2;
					}else if(currentX < minX) {
						currentX = minX;
					}
					
					return currentX;
				},

				setUpWatcher: function() {
					var that = this;
					
					scope.$watch("data", function(newV, oldV) {
						that.point
							.attr("cx", newScale.getScaleX()(newV.x))
							.attr("cy", newScale.getScaleY()(newV.y));

						that.text
							.attr("y", newScale.getScaleY()(newV.y))
							.text(newV.text)
							.attr("x", that.getTextXpos(newV.x))

					});
				}
			}

			if (scope.config) {
				_.extend(obj.config, scope.config)
			}

			obj.init();

		}
	}
});