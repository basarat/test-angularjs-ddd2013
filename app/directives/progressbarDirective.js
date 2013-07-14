/// <reference path="directives.ts" />
/// <reference path="../reference.ts" />
function progressbarDirective() {
    return {
        restrict: "EAC",
        template: '<div>progress bar demo</div>',
        replace: true
    };
}

directives.directive('progressbar', progressbarDirective);
//@ sourceMappingURL=progressbarDirective.js.map
