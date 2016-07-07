"use strict";
// angular.module("share.module", []);

describe("directive:trainPath", function() {
	var compile, rootScope, element;

	beforeEach(module("share.module"));
	
	beforeEach(inject(function(_$compile_,_$rootScope_){	
		compile = _$compile_;
		rootScope = _$rootScope_;
		element = compile("<trainPath data='data'></trainPath>")(rootScope);
	}));


	it("test data value", function() {
		rootScope.data = "test";
		rootScope.$digest();
		console.info("value of element is:", element);
	})
});
