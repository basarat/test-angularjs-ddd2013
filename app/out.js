var Controllers;
(function (Controllers) {
    var MainController = (function () {
        function MainController($scope) {
            this.progress = [1, 2, 60];
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
function progressbarDirective() {
    return {
        restrict: "EAC",
        templateUrl: 'app/directives/progressbar.html',
        replace: true
    };
}

var directives = angular.module('directives', []).directive('progressbar', progressbarDirective);
