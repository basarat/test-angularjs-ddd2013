/// <reference path="../vendor.d.ts" />


class MainController {

    progress: number[] = [1, 90, 60];
    count: number = 0;
    message: string = "Some message";
    
    constructor($scope) {
        $scope.vm = this;
    }
}


angular.module('controllers', []).controller('MainController', MainController);