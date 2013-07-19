/// <reference path="../reference.ts" />
function progressbarDirective() {
    return {
        restrict: 'EAC',
        templateUrl: 'app/directives/progressbar.html',
        scope: {
            progress: "="
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
;
//@ sourceMappingURL=directives.js.map
