var Controllers;
(function (Controllers) {
    var MainController = (function () {
        function MainController($scope) {
            this.count = 12;
            this.message = "some message";
            $scope.vm = this;
        }
        MainController.prototype.inc = function () {
            this.count++;
        };
        MainController.prototype.dec = function () {
            this.count--;
        };
        MainController.$inject = ['$scope'];
        return MainController;
    })();
    Controllers.MainController = MainController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var TestController = (function () {
        function TestController($scope) {
            $scope.name = "test me";
        }
        return TestController;
    })();
    Controllers.TestController = TestController;
})(Controllers || (Controllers = {}));
var app = angular.module('demoApp', []).controller(Controllers).directive('progressbar', progressbarDirective);
function progressbarDirective() {
    return {
        restrict: "EAC",
        template: '<div>progress bar demo</div>',
        replace: true
    };
}
