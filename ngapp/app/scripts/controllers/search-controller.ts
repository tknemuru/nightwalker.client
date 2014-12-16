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
    }

    /**
     * 検索コントローラ
     */
    export class SearchController {
        /**
         * コンストラクタ
         */
        constructor(private $scope: ISearchConditionScope
            , private queryCreator: Services.SearchQueryCreatorService) {
        }

        public search(): void {
            // 検索クエリを取得
            var condition = new Models.SearchCondition(this.$scope.searchUrl);
            var query: string = this.queryCreator.getSearchQuery(condition);
            alert('search execute query -> ' + query);
        }
    }
}
angular.module('NightWalker.Controllers')
    .controller('SearchController', ['$scope', 'SearchQueryCreatorService', NightWalker.Controllers.SearchController]);
