function progressbarDirective($compile) {
    var _this = this;
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
        compile: function (element, attrs) {
            element.find('.btn').after('<div>{{msg}}</div>');

            return function (scope, element, attrs) {
                // view -> vm
                element.find('input').on('keyup', function () {
                    var val = $(this).val();
                    if (scope.value != val) {
                        scope.$apply(function () {
                            scope.value = val;
                        });
                    }
                });
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
;
//@ sourceMappingURL=directives.js.map
