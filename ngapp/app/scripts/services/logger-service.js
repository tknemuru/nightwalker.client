/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Services;
    (function (Services) {
        "use strict";
        /**
         * ログ生成機能を提供します。
         */
        var LoggerService = (function () {
            /**
             * コンストラクタ
             */
            function LoggerService() {
                this.SearchingStr = LoggerService.DefaultSearchingStr;
            }
            /**
             * 探索開始のログを生成します。
             */
            LoggerService.prototype.searchStart = function (address) {
                this.SearchingStr = LoggerService.DefaultSearchingStr;
                return 'walking start -> ' + address;
            };
            /**
             * 探索中のログを生成します。
             */
            LoggerService.prototype.searching = function () {
                this.SearchingStr += '.';
                return this.SearchingStr;
            };
            /**
             * 探索中を示す情報の初期値
             */
            LoggerService.DefaultSearchingStr = 'Now Walking';
            return LoggerService;
        })();
        Services.LoggerService = LoggerService;
    })(Services = NightWalker.Services || (NightWalker.Services = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Services').service('LoggerService', [NightWalker.Services.LoggerService]);
//# sourceMappingURL=logger-service.js.map