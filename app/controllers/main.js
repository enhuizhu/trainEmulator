"use strict";

angular.module("trainApp").controller("main", function($scope, svgScale, trainSpeed) {

	var speed = 200,
		speedFaster = 400;

	this.$ = $scope;
	this.$.speed = speed;
	this.$.speedFaster = speedFaster;
	this.$.trainStopTime = 5;
	this.$.trainIntervalTime = 10;

	this.config = {
		margin: 10,
	}

	this.$.svgSize = {
		width: 970,
		height: 600
	};

	this.bakerlooLine = [
		{x:-0.3355, y:51.5925, v:speed, "text": "Harrow & Wealdstone"},
		{x:-0.3172, y:51.5821, v:speed, "text": "Kenton"},
		{x:-0.3087, y:51.57081, v:speed, "text": "South Kenton"},
		{x:-0.304, y:51.5627, v:speed, "text": "North Wembley"},
		{x:-0.29663, y:51.552633, v:speed, "text": "Wembley Central"},
		{x:-0.2754, y:51.5441, v:speed, "text": "Stonebridge Park"},
		{x:-0.2578, y:51.5364, v:speed, "text": "Harlesden"},
		{x:-0.24547, y:51.53266, v:speed, "text": "Willesden Junction"},
		{x:-0.22479, y:51.530746, v:speed, "text": "Kensal Green"},
		{x:-0.2063, y:51.5339, v:speed, "text": "Queen's Park"},
		{x:-0.19406, y:51.53512, v:speed, "text": "Kilburn Park"},
		{x:-0.185565, y:51.529785, v:speed, "text": "Maida Vale"},
		{x:-0.183677, y:51.52327, v:speed, "text": "Warwick Avenue"},
		{x:-0.1774, y:51.5173, v:speed, "text": "Paddington"},
		{x:-0.170278, y:51.520278, v:speed, "text": "Edgware Road"},
		{x:-0.1634, y:51.5223, v:speed, "text": "Marylebone"},
		{x:-0.157, y:51.522, v:speedFaster, "text": "Baker Stree"},
		{x:-0.1464, y:51.5235, v:speedFaster, "text": "Regent's Park"},
		{x:-0.1416, y:51.51519, v:speedFaster, "text": "Oxford Circus"},
		{x:-0.134, y:51.5101, v:speedFaster, "text": "Piccadilly Circus"},
		{x:-0.12475, y:51.508, v:speedFaster, "text": "Charing Cross"},
		{x:-0.122, y:51.507, v:speedFaster, "text": "Embankment"},
		{x:-0.113, y:51.507, v:speedFaster, "text": "Waterloo"},
		{x:-0.1118, y:51.499, v:speedFaster, "text": "Lambeth North"},
		{x:-0.0997, y:51.4944, v:speedFaster, "text": "Elephant & Castle"},
	];

	this.$.config = {
		svgSize: this.$.svgSize,
		margin: this.config.margin,
		convertSpeed: true,
		datas: [
			{
				data: this.bakerlooLine,
				pathConfig: {
					stroke: "rgb(118,61,24)",
					strokeWidth: "2",
					fill: "none"
				},
				trainStopTime: this.$.trainStopTime,
				trainIntervalTime: this.$.trainIntervalTime
			}
		]
	};


	// var speed = 10,
	// 	speedFaster = 20;
	// this.$.data = [ 

	// 	{ "x": 1,   "y": 5, v: speed, "text": "stop1"},  { "x": 20,  "y": 20, v: speed, "text": "stop2"},
 //        { "x": 40,  "y": 10, v: speed, "text": "stop3"}, { "x": 60,  "y": 40, v: speed, "text": "stop4"},
 //        { "x": 80,  "y": 5, v: speedFaster, "text": "stop5"},  { "x": 100, "y": 60, v: speedFaster, "text": "stop6"},
 //        { "x": 200,  "y": 100, v: speedFaster, "text": "stop7"},  { "x": 500, "y": 400, v: speedFaster, "text": "stop8"},
	// ];

	// this.$.data2 = [ 
	// 	{ "x": 20,   "y": 5, v: speed, "text": "stop1"},  { "x": 45,  "y": 89, v: speed, "text": "stop2"},
 //        { "x": 100,  "y": 10, v: speed, "text": "stop3"}, { "x": 150,  "y": 40, v: speed, "text": "stop4"},
 //        { "x": 200,  "y": 5, v: speedFaster, "text": "stop5"},  { "x": 350, "y": 60, v: speedFaster, "text": "stop6"},
 //        { "x": 450,  "y": 100, v: speedFaster, "text": "stop7"},  { "x": 500, "y": 300, v: speedFaster, "text": "stop8"},
	// ];

	// this.$.config2 = {
	// 	svgSize: this.$.svgSize,
	// 	margin: this.config.margin,
	// 	datas: [
	// 		{
	// 			data: this.$.data,
	// 			pathConfig: {
	// 				stroke: "blue",
	// 				strokeWidth: "2",
	// 				fill: "none"
	// 			},
	// 			trainStopTime: 2,
	// 			trainIntervalTime: 5,
	// 		},

	// 		{
	// 			data: this.$.data2,
	// 			pathConfig: {
	// 				stroke: "gray",
	// 				strokeWidth: "2",
	// 				fill: "none"
	// 			},
	// 			trainStopTime: 2,
	// 			trainIntervalTime: 5,
	// 		}
	// 	]
	// };

	// svgScale.setScaleX(this.$.data, this.config.margin, this.$.svgSize.width);
	// svgScale.setScaleY(this.$.data, this.config.margin, this.$.svgSize.height);
});