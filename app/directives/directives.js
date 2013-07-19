/// <reference path="../reference.ts" />
function progressbarDirective() {
    return {
        restrict: 'EAC',
        template: '<div> Hey there</div>'
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
;
//@ sourceMappingURL=directives.js.map
