/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Services;
    (function (Services) {
        "use strict";
        /**
         * 検索クエリの作成機能を提供します。
         */
        var SearchQueryCreatorService = (function () {
            /**
             * コンストラクタ
             */
            function SearchQueryCreatorService() {
                // TODO: 後でちゃんとやる
                this.baseApiUrl = 'http://localhost:8080/api/v1/url/images/';
            }
            /**
             * 検索クエリを取得します。
             */
            SearchQueryCreatorService.prototype.getSearchQuery = function (conditon) {
                var query = this.baseApiUrl;
                query += '?target=' + encodeURIComponent(conditon.url);
                return query;
            };
            return SearchQueryCreatorService;
        })();
        Services.SearchQueryCreatorService = SearchQueryCreatorService;
    })(Services = NightWalker.Services || (NightWalker.Services = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Services').service('SearchQueryCreatorService', [NightWalker.Services.SearchQueryCreatorService]);
//# sourceMappingURL=search-query-creator-service.js.map