/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        /**
         * 検索コントローラ
         */
        var SearchController = (function () {
            /**
             * コンストラクタ
             */
            function SearchController($scope, queryCreator, searcher) {
                this.$scope = $scope;
                this.queryCreator = queryCreator;
                this.searcher = searcher;
            }
            SearchController.prototype.search = function () {
                var _this = this;
                // 検索クエリを取得
                var condition = new NightWalker.Models.SearchCondition(this.$scope.searchUrl);
                var query = this.queryCreator.getSearchQuery(condition);
                // 検索実行
                this.searcher.search(query, function (data) {
                    _this.$scope.images = data.Images;
                    _this.$scope.hrefs = data.Hrefs;
                });
            };
            return SearchController;
        })();
        Controllers.SearchController = SearchController;
    })(Controllers = NightWalker.Controllers || (NightWalker.Controllers = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Controllers').controller('SearchController', ['$scope', 'SearchQueryCreatorService', 'SearchService', NightWalker.Controllers.SearchController]);
//# sourceMappingURL=search-controller.js.map