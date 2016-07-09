"use strict";

angular.module("trainApp").controller("main", function($scope, svgScale) {

	var speed = 5 * 4,
		speedFaster = 10 * 4;

	this.$ = $scope;

	this.config = {
		margin: 10,
	}

	this.$.data = [ 
		{ "x": 1,   "y": 5, v: speed, "text": "stop1"},  { "x": 20,  "y": 20, v: speed, "text": "stop2"},
        { "x": 40,  "y": 10, v: speed, "text": "stop3"}, { "x": 60,  "y": 40, v: speed, "text": "stop4"},
        { "x": 80,  "y": 5, v: speedFaster, "text": "stop5"},  { "x": 100, "y": 60, v: speedFaster, "text": "stop6"},
        { "x": 200,  "y": 100, v: speedFaster, "text": "stop7"},  { "x": 500, "y": 400, v: speedFaster, "text": "stop8"},
	];

	this.$.data2 = [ 
		{ "x": 20,   "y": 5, v: speed, "text": "stop1"},  { "x": 45,  "y": 89, v: speed, "text": "stop2"},
        { "x": 100,  "y": 10, v: speed, "text": "stop3"}, { "x": 150,  "y": 40, v: speed, "text": "stop4"},
        { "x": 200,  "y": 5, v: speedFaster, "text": "stop5"},  { "x": 350, "y": 60, v: speedFaster, "text": "stop6"},
        { "x": 450,  "y": 100, v: speedFaster, "text": "stop7"},  { "x": 500, "y": 300, v: speedFaster, "text": "stop8"},
	];

	this.$.config = {
		"pathConfig" : {
			stroke: "blue",
			strokeWidth: "2",
			fill: "none"
		}
	};

	this.$.config2 = {
		"pathConfig" : {
			stroke: "gray",
			strokeWidth: "2",
			fill: "none"
		}
	};

	this.$.trainStopTime = 2;

	this.$.svgSize = {
		width: 600,
		height: 400
	};

	svgScale.setScaleX(this.$.data, this.config.margin, this.$.svgSize.width);
	svgScale.setScaleY(this.$.data, this.config.margin, this.$.svgSize.height);
});