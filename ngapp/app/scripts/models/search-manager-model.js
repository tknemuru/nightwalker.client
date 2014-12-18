/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * リソース管理モデル
         */
        var ResourceManager = (function () {
            /**
             * コンストラクタ
             */
            function ResourceManager() {
                this.resources = [];
                this.resourceStorageAddresses = [];
            }
            /**
             * 在庫切れかどうかを判定します。
             */
            ResourceManager.prototype.isOutOfStock = function () {
                return (this.resources.length > 0 || this.resourceStorageAddresses.length > 0);
            };
            return ResourceManager;
        })();
        Models.ResourceManager = ResourceManager;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=search-manager-model.js.map