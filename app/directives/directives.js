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
                $('input').on('keyup', function () {
                    var _this = this;
                    scope.$apply(function () {
                        var newval = $(_this).val();
                        if (scope.value != newval) {
                            scope.value = newval;
                            scope.change();
                        }
                    });
                });

                // vm -> view
                scope.$watch('value', function (newval, oldval) {
                    $('input').val(scope.value);
                });
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
//@ sourceMappingURL=directives.js.map
