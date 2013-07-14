/// <reference path="../reference.ts" />

function progressbarDirective(): ng.IDirective{
    return {
        restrict: "EAC",
        template: '<div>progress bar demo</div>',
        replace:true
    };
}