/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Services;
    (function (Services) {
        "use strict";
        /**
         * 検索条件の作成機能を提供します。
         */
        var SearchConditionCreatorService = (function () {
            /**
             * コンストラクタ
             */
            function SearchConditionCreatorService() {
                // TODO: 後でちゃんとやる
                this.baseApiUrl = 'http://localhost:8080/api/v1/url/images/';
            }
            /**
             * 検索条件を取得します。
             */
            SearchConditionCreatorService.prototype.getSearchCondition = function (successCallback, errorCallback) {
                if (errorCallback === void 0) { errorCallback = null; }
                this.$http.get(this.baseApiUrl).success(successCallback).error(errorCallback);
            };
            return SearchConditionCreatorService;
        })();
        Services.SearchConditionCreatorService = SearchConditionCreatorService;
    })(Services = NightWalker.Services || (NightWalker.Services = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Services').service('SearchConditionCreatorService', [NightWalker.Services.SearchConditionCreatorService]);
//# sourceMappingURL=search-condition-creator-service.js.map