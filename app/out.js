var Controllers;
(function (Controllers) {
    var MainController = (function () {
        function MainController($scope) {
            this.progress = [1, 90, 60];
            $scope.vm = this;
        }
        MainController.$inject = ['$scope'];
        return MainController;
    })();
    Controllers.MainController = MainController;

    var TestController = (function () {
        function TestController($scope) {
            $scope.name = "test me";
        }
        return TestController;
    })();
    Controllers.TestController = TestController;
})(Controllers || (Controllers = {}));

var controllers = angular.module('controllers', []).controller(Controllers);
var app = angular.module('demoApp', ['controllers', 'directives']);
function progressbarDirective($compile) {
    return {
        restrict: "EAC",
        templateUrl: 'app/directives/progressbar.html',
        replace: true,
        compile: function (element, attrs) {
            var content = '<div>inside:{{progress}}</div>';
            element.find('.well').append(content);

            return function (scope, element, attrs) {
            };
        }
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
