/// <reference path="../vendor.d.ts" />

module Controllers {

    export class MainController {

        progress: number[] = [1, 90, 60];        
        count: number = 0;
                
        constructor($scope) {
            $scope.vm = this;
        }    
    }    
}

var controllers = angular.module('controllers', []).controller(Controllers);