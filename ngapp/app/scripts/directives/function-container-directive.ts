/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Directives {
    "use strict";

    /**
     * 機能コンテナの動作を提供します。
     */
    export class FunctionContainer implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;
        private infoSeqNo: number;

        /**
         * コンストラクタ
         */
        constructor() {
            this.restrict = 'A';
            this.link = (scope: Controllers.ISearchConditionScope, element: ng.IAugmentedJQuery) => {
                // 探索が開始されたら表示する
                scope.$watch('resourceManager.stockState', (newValue: Models.StockState, oldValue: Models.StockState) => {
                    if (newValue !== undefined && newValue !== Models.StockState.NoManagement) {
                        element.animate({ height: '80px' }, 200);
                    }
                });
            };
        }
    }
}
angular.module('NightWalker.Directives')
    .directive('functionContainer', [() => { return new NightWalker.Directives.FunctionContainer() }]);
