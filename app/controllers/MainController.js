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
//@ sourceMappingURL=MainController.js.map
