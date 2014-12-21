/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Directives {
    "use strict";

    /**
     * 情報出力機能を提供します。
     */
    export class InformationBoard implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;
        private infoSeqNo: number;

        /**
         * コンストラクタ
         */
        constructor(private $compile: ng.ICompileService
                , private logger: Services.LoggerService) {
            this.infoSeqNo = 0;
            this.restrict = 'A';
            this.link = (scope: Controllers.ISearchConditionScope, element: ng.IAugmentedJQuery) => {
                // 探索中の情報を表示
                setInterval(() => {
                    // 探索開始前は表示しない
                    if (scope.resourceManager === undefined) {
                        return;
                    }

                    if (scope.resourceManager.stockState == Models.StockState.Searching) {
                        this.write(scope, element, logger.searching());
                    }
                }, 1000);

                // 情報の表示処理
                scope.$watch('resourceManager.searchInformation', (newValue: string, oldValue: string) => {
                    this.write(scope, element, newValue);
                });
            };
        }

        /**
         * 情報を書き込みます。
         */
        private write(scope: Controllers.ISearchConditionScope, element: ng.IAugmentedJQuery, info: string): void {
            if (info === undefined) {
                return;
            }

            element.children('#info-' + (this.infoSeqNo - 4)).remove();
            element.append(this.$compile('<div id="info-' + this.infoSeqNo + '">' + info + '</div>')(scope));
            this.infoSeqNo++;
        }
    }
}
angular.module('NightWalker.Directives')
    .directive('informationBoard', ['$compile', 'LoggerService', ($compile: ng.ICompileService, logger: NightWalker.Services.LoggerService)
         => { return new NightWalker.Directives.InformationBoard($compile, logger) }]);
