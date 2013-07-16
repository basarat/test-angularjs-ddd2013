
module Controllers {

    export class MainController implements IMainController {

        progress: number[] = [1,90,60];

        static $inject = ['$scope'];
        constructor($scope) {
            $scope.vm = this;
        }
    
    }

    export class TestController {
        constructor($scope) {
            $scope.name = "test me";
        }
    }

}

var controllers = angular.module('controllers', []).controller(Controllers);