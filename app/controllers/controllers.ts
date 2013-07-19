/// <reference path="../vendor.d.ts" />

module Controllers {

    export class MainController {

        progress: number[] = [1, 90, 60];        
        count: number = 0;

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