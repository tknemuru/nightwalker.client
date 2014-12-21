/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * ローディング状態の遷移に関する機能を提供します。
         */
        var AndMoreSearch = (function () {
            /**
             * コンストラクタ
             */
            function AndMoreSearch() {
                this.restrict = 'A';
                this.link = function (scope, element) {
                    scope.$watch('isSearching', function (newValue, oldValue) {
                        if (newValue === true) {
                            element.removeClass('loader-none');
                            element.addClass('loader');
                        }
                        else {
                            element.removeClass('loader');
                            element.addClass('loader-none');
                        }
                    });
                };
            }
            return AndMoreSearch;
        })();
        Directives.AndMoreSearch = AndMoreSearch;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('andMoreSearch', [function () {
    return new NightWalker.Directives.AndMoreSearch();
}]);
//# sourceMappingURL=and-more-search-directive.js.map