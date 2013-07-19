/// <reference path="../vendor.d.ts" />
var Controllers;
(function (Controllers) {
    var MainController = (function () {
        function MainController($scope) {
            this.progress = [1, 90, 60];
            this.count = 0;
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
//@ sourceMappingURL=controllers.js.map
