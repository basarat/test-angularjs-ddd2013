/// <reference path="../reference.ts" />
function progressbarDirective() {
    return {
        restrict: 'EAC',
        templateUrl: 'app/directives/progressbar.html',
        transclude: true,
        scope: {
            progress: "=",
            msg: "@",
            click: "&"
        },
        link: function (scope, element, attrs) {
            element.find('.btn').after('<div>{{msg}}</div>');
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
;
//@ sourceMappingURL=directives.js.map
