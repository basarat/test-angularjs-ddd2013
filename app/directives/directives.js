/// <reference path="../reference.ts" />
function progressbarDirective($compile) {
    return {
        restrict: 'EAC',
        templateUrl: 'app/directives/progressbar.html',
        transclude: true,
        scope: {
            progress: "=",
            msg: "@",
            click: "&",
            value: "=",
            change: "&"
        },
        compile: function (element, attrs) {
            element.find('.btn').after('<div>{{msg}}</div>');

            return function (scope, element, attrs) {
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
;
//@ sourceMappingURL=directives.js.map
