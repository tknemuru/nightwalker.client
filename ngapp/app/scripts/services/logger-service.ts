/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Services {
    "use strict";

    /**
     * ログ生成機能を提供します。
     */
    export class LoggerService {
        /**
         * 探索中を示す情報の初期値
         */
        private static DefaultSearchingStr: string = 'Now Walking';

        /**
         * 探索中を示す情報
         */
        private SearchingStr: string;

        /**
         * コンストラクタ
         */
        constructor() {
            this.SearchingStr = LoggerService.DefaultSearchingStr;
        }

        /**
         * 探索開始のログを生成します。
         */
        public searchStart(address: string): string {
            this.SearchingStr = LoggerService.DefaultSearchingStr;
            return 'walking start -> ' + address;
        }

        /**
         * 探索中のログを生成します。
         */
        public searching(): string {
            this.SearchingStr += '.';
            return this.SearchingStr;
        }
    }
}
angular.module('NightWalker.Services')
    .service('LoggerService', [NightWalker.Services.LoggerService]);