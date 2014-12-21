/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Models {
    "use strict";

    /**
     * 作業状態
     */
    export enum PlayingState {
        /**
         * 未管理
         */
        NoManagement,

        /**
         * 作業中
         */
        Play,

        /**
         * 一時停止
         */
        Pause,
    }
}