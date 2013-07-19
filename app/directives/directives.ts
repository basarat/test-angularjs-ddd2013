/// <reference path="../reference.ts" />

function progressbarDirective($compile:ng.ICompileService): ng.IDirective {
    return {
        restrict: 'EAC',
        templateUrl: 'app/directives/progressbar.html',
        transclude: true,
        scope: {
            progress: "=",
            msg: "@",
            click: "&"
        },
        compile: (element, attrs) => {
            element.find('.btn').after('<div>{{msg}}</div>');
            console.log('here');

            return (scope, element: JQuery, attrs) => {
                
            };
        }
    }
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);;