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
//@ sourceMappingURL=TestController.js.map
