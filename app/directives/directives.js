/// <reference path="../reference.ts" />
function progressbarDirective() {
    return {
        restrict: "EAC",
        template: '<div>progress bar demo</div>',
        replace: true
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
//@ sourceMappingURL=directives.js.map
