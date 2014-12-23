/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker {
    "use strict";

    /*
     * 実行環境
     */
    export enum Environment {
        /*
         * 開発環境
         */
        Development,

        /*
         * 本番環境
         */
        Production,
    }

    /**
     * 設定情報を管理します。
     */
    export class AppConfig {
        public static getEnvironment(): Environment {
            return Environment.Production;
        }

        /**
         * APIの基底URLを取得します。
         */
        public static getBaseApiUrl(): string {
            if (AppConfig.getEnvironment() === Environment.Production) {
                return 'http://nightwalker-api.herokuapp.com/api/v1/';
            }
            else {
                return 'http://localhost:8080/api/v1/';
            }
        }
    }
}