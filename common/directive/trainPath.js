'use strict';

angular.module("share.module").directive("trainPath", function(helper, svgScale) {
	return {
		restrict: "AE",
		replace: true,
		template: "<svg><g><path></path></g></svg>",
		scope: {
			data: "=",
			config: "=?"
		},

		link: function(scope, element, attrs) {
			if (attrs.test) {
				var newElement = element.find("path");
			}else{
				var newElement = helper.getSvgChild(element, attrs)[0].querySelectorAll("path");
			}

			var obj = {
				
				path: d3.select(newElement[0]),

				d: null,

				line: (function(){
					var func = d3.line()
						.x(function(d) { 
							return svgScale.getScaleX()(d.x); 
						})
						.y(function(d) { 
							return svgScale.getScaleY()(d.y); 
						})
                 
					return func;
				})(),

				init: function() {
					this.setUpWatchers();
					this.setUpAttrs();
				},

				setUpAttrs: function() {
					if (!scope.config) {
						return false;
					}

					this.path
						.attr("stroke", scope.config.stroke)
						.attr("stroke-width", scope.config.strokeWidth)
						.attr("fill", scope.config.fill)
				},

				setUpWatchers: function() {
					var that = this;
					
					scope.$watch("data", function(newV, oldV) {
						try{
							that.path.attr("d", that.line(newV));
						}catch(e) {

						};
					});
				}
			};

			scope.obj = obj;

			scope.obj.init();
		}
	}

});
