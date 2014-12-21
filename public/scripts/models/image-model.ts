/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Models {
    "use strict";

    /**
     * 画像モデル
     */
    export class Image implements IResource {
        /**
         * コンストラクタ
         */
        constructor(public url: string
            , public width: number
            , public height: number) {
        }
    }
}