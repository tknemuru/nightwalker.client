/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Services;
    (function (Services) {
        "use strict";
        /**
         * 検索機能を提供します。
         */
        var SearchService = (function () {
            /**
             * コンストラクタ
             */
            function SearchService($http) {
                this.$http = $http;
            }
            /**
             * 検索を実行します。
             */
            SearchService.prototype.search = function (query, successCallback, errorCallback) {
                if (errorCallback === void 0) { errorCallback = null; }
                this.$http.get(query).success(successCallback).error(errorCallback);
            };
            return SearchService;
        })();
        Services.SearchService = SearchService;
    })(Services = NightWalker.Services || (NightWalker.Services = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Services').service('SearchService', ['$http', NightWalker.Services.SearchService]);
//# sourceMappingURL=search-service.js.map