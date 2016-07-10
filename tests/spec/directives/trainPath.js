"use strict";

describe("directive:trainPath", function() {
	var compile, rootScope, scope, element, newEle;

	beforeEach(module("share.module"));

	beforeEach(module("main"));

	var getCompileElement = function() {
		element = angular.element("<train-path data='data' config='config' test='true'></train-path>");
		return compile(element)(scope);
	}
	
	beforeEach(inject(function(_$compile_,_$rootScope_){	
		compile = _$compile_;
		rootScope = _$rootScope_;
		scope = rootScope.$new();
	}));

	fit("test data value", function() {
		scope.data = null,
		
		scope.config = {
			stroke: "blue",
			strokeWidth: "2",
			fill: "red"
		};

		var newEle = getCompileElement();

		var directiveScope = element.isolateScope();

		scope.data = [{
			x: 0,
			y: 0
		},
		{
			x: 1,
			y: 1			
		}];

		directiveScope.$digest();

		expect(element.find("path").attr("stroke")).toEqual("blue");
		expect(element.find("path").attr("stroke-width")).toEqual("2");
		expect(element.find("path").attr("fill")).toEqual("red");
	})
});
