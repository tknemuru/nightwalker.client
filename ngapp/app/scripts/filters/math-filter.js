/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Filters;
    (function (Filters) {
        "use strict";
        /**
         * 数値に関するフィルター機能を提供します。
         */
        var MathFilter = (function () {
            function MathFilter() {
                return 'hoge';
            }
            return MathFilter;
        })();
        Filters.MathFilter = MathFilter;
    })(Filters = NightWalker.Filters || (NightWalker.Filters = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Services').service('SearchService', ['$http', NightWalker.Services.SearchService]);
//# sourceMappingURL=math-filter.js.map