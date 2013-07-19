/// <reference path="controllers/controllers.ts" />
/// <reference path="directives/directives.ts" />
/// <reference path="reference.ts" />


var app = angular.module('demoApp', ['controllers', 'directives']);

/// Debug utilities:
// angular element scope
function aes(item) {
    return (<any>angular.element(item)).scope();
}