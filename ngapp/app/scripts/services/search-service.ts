/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Services {
    "use strict";

    /**
     * 検索機能を提供します。
     */
    export class SearchService {
        /**
         * コンストラクタ
         */
        constructor(private $http: ng.IHttpService) {
        }

        /**
         * 検索を実行します。
         */
        public search(query: string
            , successCallback: ng.IHttpPromiseCallback<Models.Image[]>
            , errorCallback: ng.IHttpPromiseCallback<any> = null): void {
            this.$http.get<Models.Image[]>(query)
                .success(successCallback)
                .error(errorCallback);
        }
    }
}
angular.module('NightWalker.Services')
    .service('SearchService', ['$http', NightWalker.Services.SearchService]);