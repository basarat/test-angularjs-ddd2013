var progressbar;
(function (progressbar) {
    progressbar.html = '<div class="well">     <div class="progress progress-striped progress-active">        <div class="bar" style="width: {{progress}}%"></div>    </div>    <div class="btn" ng-click="click()">Click me</div>    <div ng-transclude></div>    <input/></div>';
})(progressbar || (progressbar = {}));
//@ sourceMappingURL=progressbar.html.js.map
