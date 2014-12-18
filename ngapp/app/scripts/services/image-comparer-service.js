/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Services;
    (function (Services) {
        "use strict";
        /**
         * 画像の比較機能を提供します。
         */
        var ImageComparerService = (function () {
            /**
             * コンストラクタ
             */
            function ImageComparerService() {
            }
            /**
             * 画像同士が等しいかどうかを判定します。
             */
            ImageComparerService.prototype.equals = function (r1, r2) {
                return r1.url === r2.url;
            };
            return ImageComparerService;
        })();
        Services.ImageComparerService = ImageComparerService;
    })(Services = NightWalker.Services || (NightWalker.Services = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Services').service('ImageComparerService', [NightWalker.Services.ImageComparerService]);
//# sourceMappingURL=image-comparer-service.js.map