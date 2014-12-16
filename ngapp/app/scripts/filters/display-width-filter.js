/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Filters;
    (function (Filters) {
        "use strict";
        /**
         * 数値に関するフィルター機能を提供します。
         */
        var DisplayWidthFilter = (function () {
            function DisplayWidthFilter(image) {
                return Math.round(image.width * (167 / image.height));
            }
            return DisplayWidthFilter;
        })();
        Filters.DisplayWidthFilter = DisplayWidthFilter;
    })(Filters = NightWalker.Filters || (NightWalker.Filters = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Filters').filter('displayWidth', function () {
    return function (image) {
        return (Math.round(image.width * (167 / image.height))) + 'px;';
    };
});
//# sourceMappingURL=display-width-filter.js.map