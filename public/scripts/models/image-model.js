/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * 画像モデル
         */
        var Image = (function () {
            /**
             * コンストラクタ
             */
            function Image(url, width, height) {
                this.url = url;
                this.width = width;
                this.height = height;
            }
            return Image;
        })();
        Models.Image = Image;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=image-model.js.map