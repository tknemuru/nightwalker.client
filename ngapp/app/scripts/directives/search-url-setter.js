/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 検索対象のURLを$scopeにセットする機能を提供します。
         */
        var SearchUrlSetter = (function () {
            /**
             * コンストラクタ
             */
            function SearchUrlSetter() {
                this.restrict = 'A';
                this.scope = {
                    searchUrl: '='
                };
                this.link = function (scope, element) {
                    element.on('keypress', function () {
                        scope.searchUrl = element.text();
                    });
                };
            }
            return SearchUrlSetter;
        })();
        Directives.SearchUrlSetter = SearchUrlSetter;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('searchUrlSetter', [function () {
    return new NightWalker.Directives.SearchUrlSetter();
}]);
//# sourceMappingURL=search-url-setter.js.map