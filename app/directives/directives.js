/// <reference path="../reference.ts" />
function progressbarDirective($compile) {
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
            var compiled = $compile('<div>{{msg}}</div>');
            var linked = compiled(scope);
            element.find('.btn').after(linked);
            console.log('here');
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
;
//@ sourceMappingURL=directives.js.map
