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
                $('input').on('keypress keydown keyup textinput', function() {
                    scope.value = $(this).val();
                });

                // vm -> view 
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);