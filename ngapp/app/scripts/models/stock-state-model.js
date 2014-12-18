/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * 在庫状態
         */
        (function (StockState) {
            /**
             * 未管理
             */
            StockState[StockState["NoManagement"] = 0] = "NoManagement";
            /**
             * 探索中
             */
            StockState[StockState["Searching"] = 1] = "Searching";
            /**
             * 探索完了
             */
            //SearchCompleted,
            /**
             * 出荷中
             */
            StockState[StockState["Shipping"] = 2] = "Shipping";
            /**
             * 出荷完了
             */
            StockState[StockState["ShippingComplated"] = 3] = "ShippingComplated";
            /**
             * 在庫切れ
             */
            StockState[StockState["OutOfStock"] = 4] = "OutOfStock";
            /**
             * 問題発生
             */
            StockState[StockState["ProblemOccurred"] = 5] = "ProblemOccurred";
        })(Models.StockState || (Models.StockState = {}));
        var StockState = Models.StockState;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=stock-state-model.js.map