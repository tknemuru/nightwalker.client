/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Services {
    "use strict";

    /**
     * 画像の比較機能を提供します。
     */
    export class ImageComparerService implements Controllers.IResourceComparer {
        /**
         * コンストラクタ
         */
        constructor() {
        }

        /**
         * 画像同士が等しいかどうかを判定します。
         */
        public equals(r1: Models.Image, r2: Models.Image) {
            return r1.url === r2.url;
        }
    }
}
angular.module('NightWalker.Services')
    .service('ImageComparerService', [NightWalker.Services.ImageComparerService]);