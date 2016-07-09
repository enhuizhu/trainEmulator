'use strict';

angular.module("share.module").service("helper", function() {
	return {
		getSvgChild: function(element, attrs) {
			var child = angular.element(element[0].firstElementChild);

            for (var attrName in attrs) {
                if(typeof attrs[attrName] === "string") {
                    child.attr(attrName, attrs[attrName]);
                }
            }

            element.replaceWith(child);		

            return child;
       }
	}
});