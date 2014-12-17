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
            /**
             * 今までの検索結果をクリアして、新たに検索を行います。
             */
            SearchController.prototype.search = function () {
                // $scopeの初期化
                this.initializeSearchScope();
                // 検索先URLを$scopeのバッファにセットしておく
                this.$scope.buffeHrefs.push(this.$scope.searchUrl);
                // 検索実行
                this.andSearch();
            };
            /**
             * 今までの検索結果を保持したまま、追加で検索を行います。
             */
            SearchController.prototype.andSearch = function () {
                var _this = this;
                var isFirstSearch = true;
                while (isFirstSearch === true || ((this.$scope.images.length + 1) % 4) > 0) {
                    isFirstSearch = false;
                    if (this.$scope.buffeImages.length > 0) {
                        // バッファから画像を表示する
                        this.$scope.images.push(this.$scope.buffeImages.shift());
                    }
                    else if (this.$scope.buffeHrefs.length > 0) {
                        // 検索中の場合は新たに検索しにいかない
                        if (this.$scope.isSeaching === true) {
                            break;
                        }
                        // 次の検索先がある場合は、新たな画像を検索しにいく
                        // 検索クエリを取得
                        var url = this.$scope.buffeHrefs.shift();
                        // 検索するURLは検索済URLに入れておく
                        this.$scope.searchCompletedUrl.push(url);
                        var condition = new NightWalker.Models.SearchCondition(url);
                        var query = this.queryCreator.getSearchQuery(condition);
                        // 検索実行
                        this.$scope.isSeaching = true;
                        this.searcher.search(query, function (data) {
                            _this.$scope.buffeImages = _this.$scope.buffeImages.concat(data.Images);
                            var newUrls = $(data.Hrefs).not($(_this.$scope.searchCompletedUrl)).get();
                            _this.$scope.buffeHrefs = _this.$scope.buffeHrefs.concat(data.Hrefs);
                            // 再帰呼び出し
                            _this.$scope.isSeaching = false;
                            _this.andSearch();
                        });
                        break;
                    }
                    else {
                        break;
                    }
                }
            };
            /**
             * $scopeの初期化を行います。
             */
            SearchController.prototype.initializeSearchScope = function () {
                this.$scope.images = [];
                this.$scope.buffeImages = [];
                this.$scope.buffeHrefs = [];
                this.$scope.isSeaching = false;
                this.$scope.searchCompletedUrl = [];
            };
            return SearchController;
        })();
        Controllers.SearchController = SearchController;
    })(Controllers = NightWalker.Controllers || (NightWalker.Controllers = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Controllers').controller('SearchController', ['$scope', 'SearchQueryCreatorService', 'SearchService', NightWalker.Controllers.SearchController]);
//# sourceMappingURL=search-controller.js.map