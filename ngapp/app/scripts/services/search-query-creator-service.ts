/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Services {
    "use strict";

    /**
     * 検索クエリの作成機能を提供します。
     */
    export class SearchQueryCreatorService {
        /**
         * APIのベースURL
         */
        private baseApiUrl: string;

        /**
         * コンストラクタ
         */
        constructor() {
            this.baseApiUrl = AppConfig.getBaseApiUrl() + 'url/images/';
        }

        /**
         * 検索クエリを取得します。
         */
        public getSearchQuery(conditon: NightWalker.Models.SearchCondition): string {
            var query: string = this.baseApiUrl;
            query += '?target=' + encodeURIComponent(conditon.url);
            return query;
        }
    }
}
angular.module('NightWalker.Services')
    .service('SearchQueryCreatorService', [NightWalker.Services.SearchQueryCreatorService]);