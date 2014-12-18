/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * 検索結果管理モデル
         */
        var SearchResult = (function () {
            /**
             * コンストラクタ
             */
            function SearchResult() {
                this.images = [];
                this.hrefsBuffer = [];
                this.imagesBuffer = [];
            }
            /**
             *
             */
            SearchResult.prototype.hasBuffer = function () {
                return (this.hrefsBuffer.length > 0 || this.imagesBuffer.length > 0);
            };
            return SearchResult;
        })();
        Models.SearchResult = SearchResult;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
2;
//# sourceMappingURL=search-result-model.js.map