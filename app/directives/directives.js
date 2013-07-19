/// <reference path="../reference.ts" />
function progressbarDirective($compile) {
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
        compile: function (element, attrs) {
            var content = '<div>inside:{{progress}}</div>';
            element.find('.content').append(content);

            return function (scope, element, attrs) {
                // view -> vm
                $('input').on('keypress keydown keyup textinput', function () {
                    var _this = this;
                    scope.$apply(function () {
                        scope.value = $(_this).val();
                    });
                });
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
//@ sourceMappingURL=directives.js.map
