/// <reference path="../vendor.d.ts" />
var MainController = (function () {
    function MainController($scope) {
        this.progress = [1, 90, 60];
        this.count = 0;
        this.message = "Some message";
        $scope.vm = this;
    }
    MainController.prototype.change = function () {
        this.count = this.count + 1;
    };
    return MainController;
})();

angular.module('controllers', []).controller('MainController', MainController);
//@ sourceMappingURL=controllers.js.map
