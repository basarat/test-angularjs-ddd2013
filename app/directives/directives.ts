/// <reference path="../reference.ts" />

function progressbarDirective(): ng.IDirective {
    return {
        restrict: 'EAC',
        template:'<div> Hey there</div>' 
    }
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);;