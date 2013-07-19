/// <reference path="../reference.ts" />

function progressbarDirective(): ng.IDirective {
    return {
        restrict: 'EAC',
        replace: true,
        template:'<div> Hey there</div>' 
    }
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);;