/// <reference path="../reference.ts" />
function progressbarDirective() {
    return {
        restrict: "EAC",
        //template: '<div>progress bar demo</div>',
        templateUrl: 'app/directives/progressbar.html',
        replace: true
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
//@ sourceMappingURL=directives.js.map
