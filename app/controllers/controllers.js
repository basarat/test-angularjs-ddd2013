/// <reference path="../vendor.d.ts" />
var Controllers;
(function (Controllers) {
    var MainController = (function () {
        function MainController($scope) {
            this.progress = [1, 90, 60];
            this.count = 0;
            $scope.vm = this;
        }
        return MainController;
    })();
    Controllers.MainController = MainController;
})(Controllers || (Controllers = {}));

var controllers = angular.module('controllers', []).controller(Controllers);
//@ sourceMappingURL=controllers.js.map
