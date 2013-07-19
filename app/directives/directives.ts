/// <reference path="../reference.ts" />

function progressbarDirective(): ng.IDirective {
    return {
        restrict: 'EAC',        
        templateUrl: 'app/directives/progressbar.html' ,
        scope: {
            progress:"="
        }
    }
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);;