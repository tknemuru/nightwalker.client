/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Models {
    "use strict";

    /**
     * リソースレスポンスモデル
     */
    export class ResourceResponse {
        /**
         * コンストラクタ
         */
        constructor(public Resources: IResource[]
            , public StorageAddresses: string[]) {
        }
    }
}