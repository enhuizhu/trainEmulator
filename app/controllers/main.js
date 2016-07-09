"use strict";

angular.module("trainApp").controller("main", function($scope) {
	$scope.data = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
 	                { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                    { "x": 80,  "y": 5},  { "x": 100, "y": 60}]

	$scope.config = {
		stroke: "blue",
		strokeWidth: "2",
		fill: "none"
	}
});