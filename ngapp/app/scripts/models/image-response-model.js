/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * 画像レスポンスモデル
         */
        var ImageResponse = (function () {
            /**
             * コンストラクタ
             */
            function ImageResponse(Images, Hrefs) {
                this.Images = Images;
                this.Hrefs = Hrefs;
            }
            return ImageResponse;
        })();
        Models.ImageResponse = ImageResponse;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=image-response-model.js.map