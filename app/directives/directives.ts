/// <reference path="../reference.ts" />

interface X extends ng.IScope {
    value: any;
    change: Function;
}

function progressbarDirective($compile: ng.ICompileService): ng.IDirective {
    return {
        restrict: 'EAC',
        templateUrl: 'app/directives/progressbar.html',
        transclude: true,
        scope: {
            progress: "=",
            msg: "@",
            click: "&",
            value: "=",
            change: "&"
        },
        compile: (element, attrs) => {
            element.find('.btn').after('<div>{{msg}}</div>');

            return (scope: X, element: JQuery, attrs) => {
                // view -> vm 
                element.find('input').on('keyup', function () {
                    var val = $(this).val();
                    if (scope.value != val) {
                        scope.$apply(() => {
                            scope.value = val;
                        })
                    }
                });
            };
        }
    }
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);;