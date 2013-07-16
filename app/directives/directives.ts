/// <reference path="../reference.ts" />

function progressbarDirective($compile: ng.ICompileService): ng.IDirective {
    return {
        restrict: "EAC",
        //template: '<div>progress bar demo</div>',
        templateUrl: 'app/directives/progressbar.html',
        replace: true,
        compile: (element, attrs) => {
            var content = '<div>inside:{{progress}}</div>';
            element.find('.content').append(content);

            return (scope, element: JQuery, attrs) => {            
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);