
module Controllers {

    interface IMainController {
        count: number;
        inc: () => void;
        dec: () => void;
    }
    
    export class MainController implements IMainController {

        count: number = 12;
        message: string = "some message";

        static $inject = ['$scope'];
        constructor($scope) {
            $scope.vm = this;
        }

        inc() {
            this.count++;
        }
        dec() {
            this.count--;
        }
    }

    export class TestController {
        constructor($scope) {
            $scope.name = "test me";
        }
    }

}

var controllers = angular.module('controllers', []).controller(Controllers);