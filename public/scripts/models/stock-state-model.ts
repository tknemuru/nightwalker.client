/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Models {
    "use strict";

    /**
     * 在庫状態
     */
    export enum StockState {
        /**
         * 未管理
         */
        NoManagement,

        /**
         * 探索中
         */
        Searching,

        /**
         * 探索完了
         */
        //SearchCompleted,

        /**
         * 出荷中
         */
        Shipping,

        /**
         * 出荷完了
         */
        ShippingComplated,

        /**
         * 在庫切れ
         */
        OutOfStock,

        /**
         * 問題発生
         */
        ProblemOccurred,
    }
}