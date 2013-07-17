/// <reference path="../reference.ts" />
function progressbarDirective($compile) {
    return {
        restrict: "EAC",
        //template: '<div>progress bar demo</div>',
        templateUrl: 'app/directives/progressbar.html',
        replace: true,
        transclude: true,
        scope: {
            progress: '='
        },
        compile: function (element, attrs) {
            var content = '<div>inside:{{progress}}</div>';
            element.find('.content').append(content);

            return function (scope, element, attrs) {
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
//@ sourceMappingURL=directives.js.map
