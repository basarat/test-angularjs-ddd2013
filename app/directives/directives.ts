/// <reference path="../reference.ts" />

function progressbarDirective($compile:ng.ICompileService): ng.IDirective {
    return {
        restrict: "EAC",
        //template: '<div>progress bar demo</div>',
        templateUrl: 'app/directives/progressbar.html',
        replace: true,
        link: (scope, element: JQuery, attrs) => {
            var content = '<div>inside:{{progress}}</div>'
            var compiled = $compile(content)(scope);
            element.find('button').after(compiled);
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar',progressbarDirective);