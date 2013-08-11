module progressbar { export var html =  '<div class="well"> \n' +
    '    <div class="progress progress-striped progress-active">\n' +
    '        <div class="bar" style="width: {{progress}}%"></div>\n' +
    '    </div>\n' +
    '    <div class="btn" ng-click="click()">Click me</div>\n' +
    '    <div ng-transclude></div>\n' +
    '    <input/>\n' +
    '</div>\n' +
    '' } 