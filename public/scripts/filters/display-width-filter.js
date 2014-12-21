/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Filters;
    (function (Filters) {
        "use strict";
        /**
        * 表示上の横幅に整形するフィルタ機能を提供します。
        */
        angular.module('NightWalker.Filters').filter('displayWidth', function () {
            return function (image) {
                return (Math.round(image.width * (167 / image.height))) + 'px;';
            };
        });
    })(Filters = NightWalker.Filters || (NightWalker.Filters = {}));
})(NightWalker || (NightWalker = {}));
;
//# sourceMappingURL=display-width-filter.js.map