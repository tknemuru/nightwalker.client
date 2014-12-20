/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Controllers {
    "use strict";

    /**
     * $svopeインターフェイス
     */
    export interface ISearchConditionScope extends ng.IScope {
        /**
         * 探索対象のアドレス
         */
        storageAddress: string;

        /**
         * リソース管理インスタンス
         */
        resourceManager: Models.ResourceManager;
    }

    /**
     * リソース同士の比較機能を提供します。
     */
    export interface IResourceComparer {
        /**
         * リソースが等しいかどうかを判定します。
         */
        equals(r1: any, r2: any): boolean;
    }

    /**
     * 探索コントローラ
     */
    export class SearchController {
        /**
         * コンストラクタ
         */
        constructor(private $scope: ISearchConditionScope
            , private queryCreator: Services.SearchQueryCreatorService
            , private searcher: Services.SearchService
            , private reourceComparer: Services.ImageComparerService
            , private logger: Services.LoggerService) {
        }

        /**
         * 今までの探索結果をクリアして、新たに探索を行います。
         */
        public search(): void {
            // リソース管理の初期化
            this.$scope.resourceManager = new Models.ResourceManager(this.$scope.storageAddress
                , this.queryCreator
                , this.searcher
                , this.reourceComparer
                , this.logger);

            // 検索実行
            this.$scope.resourceManager.search();
        }
    }
}
angular.module('NightWalker.Controllers')
    .controller('SearchController', ['$scope', 'SearchQueryCreatorService', 'SearchService', 'ImageComparerService', 'LoggerService', NightWalker.Controllers.SearchController]);
