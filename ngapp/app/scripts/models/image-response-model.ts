/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Models {
    "use strict";

    /**
     * 画像レスポンスモデル
     */
    export class ImageResponse {
        /**
         * コンストラクタ
         */
        constructor(public Images: Image[]
            , public Hrefs: string[]) {
        }
    }
}