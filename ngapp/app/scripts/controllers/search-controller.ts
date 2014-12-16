/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Controllers {
    "use strict";

    /**
     * $svopeインターフェイス
     */
    export interface ISearchConditionScope extends ng.IScope {
        /**
         * 検索対象のURL
         */
        searchUrl: string;

        /**
         * 検索結果の画像URLリスト
         */
        imageUrls: string[];
    }

    /**
     * 検索コントローラ
     */
    export class SearchController {
        /**
         * コンストラクタ
         */
        constructor(private $scope: ISearchConditionScope
            , private queryCreator: Services.SearchQueryCreatorService
            , private searcher: Services.SearchService) {
        }

        public search(): void {
            // 検索クエリを取得
            var condition = new Models.SearchCondition(this.$scope.searchUrl);
            var query: string = this.queryCreator.getSearchQuery(condition);

            // 検索実行
            this.searcher.search(query
                , (data: string[]) => {
                    this.$scope.imageUrls = data;
                });
        }
    }
}
angular.module('NightWalker.Controllers')
    .controller('SearchController', ['$scope', 'SearchQueryCreatorService', 'SearchService', NightWalker.Controllers.SearchController]);
