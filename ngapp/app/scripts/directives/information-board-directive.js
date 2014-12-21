/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 情報出力機能を提供します。
         */
        var InformationBoard = (function () {
            /**
             * コンストラクタ
             */
            function InformationBoard($compile, logger) {
                var _this = this;
                this.$compile = $compile;
                this.logger = logger;
                this.infoSeqNo = 0;
                this.restrict = 'A';
                this.link = function (scope, element) {
                    // 探索中の情報を表示
                    setInterval(function () {
                        // 探索開始前は表示しない
                        if (scope.resourceManager === undefined) {
                            return;
                        }
                        if (scope.resourceManager.stockState == 1 /* Searching */) {
                            _this.write(scope, element, logger.searching());
                        }
                    }, 1000);
                    // 情報の表示処理
                    scope.$watch('resourceManager.searchInformation', function (newValue, oldValue) {
                        _this.write(scope, element, newValue);
                    });
                };
            }
            /**
             * 情報を書き込みます。
             */
            InformationBoard.prototype.write = function (scope, element, info) {
                if (info === undefined) {
                    return;
                }
                element.children('#info-' + (this.infoSeqNo - 4)).remove();
                element.append(this.$compile('<div id="info-' + this.infoSeqNo + '">' + info + '</div>')(scope));
                this.infoSeqNo++;
            };
            return InformationBoard;
        })();
        Directives.InformationBoard = InformationBoard;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('informationBoard', ['$compile', 'LoggerService', function ($compile, logger) {
    return new NightWalker.Directives.InformationBoard($compile, logger);
}]);
//# sourceMappingURL=information-board-directive.js.map