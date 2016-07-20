'use strict';

angular.module("share.module").service("svgScale", function() {
	var obj = {
		setScaleX: function(data, margin, width) {
			var maxX = d3.max(data, function(d) {
				return d.x;
			});

			var minX = d3.min(data, function(d) {
				return d.x;
			});

			console.info("minX", minX);

			this.scaleX = d3.scaleLinear()
				.range([margin, width - margin])
				.domain([minX, maxX]);
		},

		getScaleX: function() {
			return this.scaleX;
		},

		setScaleY: function(data, margin, height) {
			var maxY = d3.max(data, function(d) {
				return d.y;
			});

			var minY = d3.min(data, function(d) {
				return d.y;
			});

			this.scaleY = d3.scaleLinear()
				.range([margin, height - margin])
				.domain([maxY, minY]);
		},

		getScaleY: function() {
			return this.scaleY;
		}
	};

	var scales = {

	}

	return {
		get: function(id) {
			if (!scales[id]) {
				scales[id] = Object.create(obj);
			}

			return scales[id];
		}
	}
});
