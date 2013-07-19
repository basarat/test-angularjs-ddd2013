/// <reference path="../reference.ts" />

function progressbarDirective($compile: ng.ICompileService): ng.IDirective {
    return {
        restrict: "EAC",
        //template: '<div>progress bar demo</div>',
        templateUrl: 'app/directives/progressbar.html',
        replace: true,
        transclude: true,
        scope: {
            progress: '=',
            click: '&',
            msg: '=',
            value: '=',
            change: '&'
        },
        compile: (element, attrs) => {
            var content = '<div>inside:{{progress}}</div>';
            element.find('.content').append(content);

            return (scope, element: JQuery, attrs) => {

                // view -> vm 
                $('input').on('keyup', function () {
                    scope.$apply(() => {
                        var newval = $(this).val();
                        if (scope.value != newval) {
                            scope.value = newval;
                            scope.change();
                        }
                    });
                });

                // vm -> view 
                scope.$watch('value', (newval, oldval) => {
                    $('input').val(scope.value);
                });
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);