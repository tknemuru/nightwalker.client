/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * ローディング状態の遷移に関する機能を提供します。
         */
        var Loader = (function () {
            /**
             * コンストラクタ
             */
            function Loader() {
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
            return Loader;
        })();
        Directives.Loader = Loader;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('loader', [function () {
    return new NightWalker.Directives.Loader();
}]);
//# sourceMappingURL=loader-directive.js.map