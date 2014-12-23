/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    "use strict";
    /*
     * 実行環境
     */
    (function (Environment) {
        /*
         * 開発環境
         */
        Environment[Environment["Development"] = 0] = "Development";
        /*
         * 本番環境
         */
        Environment[Environment["Production"] = 1] = "Production";
    })(NightWalker.Environment || (NightWalker.Environment = {}));
    var Environment = NightWalker.Environment;
    /**
     * 設定情報を管理します。
     */
    var AppConfig = (function () {
        function AppConfig() {
        }
        AppConfig.getEnvironment = function () {
            return 0 /* Development */;
        };
        /**
         * APIの基底URLを取得します。
         */
        AppConfig.getBaseApiUrl = function () {
            if (AppConfig.getEnvironment() === 1 /* Production */) {
                return 'http://nightwalker-api.herokuapp.com/api/v1/';
            }
            else {
                return 'http://localhost:8080/api/v1/';
            }
        };
        return AppConfig;
    })();
    NightWalker.AppConfig = AppConfig;
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=app-config.js.map