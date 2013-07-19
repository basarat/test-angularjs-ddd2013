/// <reference path="../reference.ts" />

function progressbarDirective(): ng.IDirective {
    return {
        restrict: 'EAC',
        templateUrl: 'app/directives/progressbar.html',
        transclude: true,
        scope: {
            progress: "=",
            msg: "@",
            click: "&"
        },
        link: (scope, element:JQuery, attrs) => {
            element.find('.btn').after('<div>{{msg}}</div>');
        },
    }
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);;