'use strict';

angular.module("share.module").directive("trainPath", function(helper) {
	return {
		restrict: "AE",
		replace: true,
		templateUrl: "./common/views/trainPath.html",
		scope: {
			data: "=",
			config: "=?"
		},

		controller: function() {
		
		},

		link: function(scope, element, attrs) {
			if (attrs.test) {
				var newElement = element.find("path");
			}else{
				var newElement = helper.getSvgChild(element, attrs);
			}

			var obj = {
				
				path: d3.select(newElement[0]),

				d: null,

				line: (function(){
					var func = d3.line()
						.x(function(d) { return d.x; })
						.y(function(d) { return d.y; })
                      
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
