"use strict";

describe("directive:trainPath", function() {
	var compile, rootScope, scope, element;

	beforeEach(module("share.module"));

	beforeEach(module("main"));
	
	beforeEach(inject(function(_$compile_,_$rootScope_){	
		compile = _$compile_;
		rootScope = _$rootScope_;
		scope = rootScope.$new();
		element = angular.element("<train-path data='data' config='config' test='true'></train-path>");
		compile(element)(scope);
	}));

	it("test data value", function() {
		scope.data = [
			{
				x:0,
				y:0
			},

			{
				x:1,
				y:1
			}

		];

		scope.config = {
			stroke: "blue",
			strokeWidth: "2",
			fill: "red"
		};

		scope.$apply();

		var directiveScope = element.isolateScope();

		directiveScope.$digest();

		expect(element.find("path").attr("d")).toEqual("M0,0L1,1");
		expect(element.find("path").attr("stroke")).toEqual("blue");
		expect(element.find("path").attr("stroke-width")).toEqual("2");
		expect(element.find("path").attr("fill")).toEqual("red");
	})
});
