/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Directives {
    "use strict";

    /**
     * ダウンロード済の状態に遷移する機能を提供します。
     */
    export class Downloaded implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor() {
            this.restrict = 'A';
            this.link = (scope: ng.IScope, element: ng.IAugmentedJQuery) => {
                element.bind('click', () => {
                    // インフォメーションにダウンロード済であることを表示する
                    var info = element.find('.thumbnail-info');
                    info.animate({ height: '100%' }, 200);
                    info.text("Downloaded");
                    info.addClass('thumbnail-info-downloaded');
                 });
            };
        }
    }
}
angular.module('NightWalker.Directives')
    .directive('downloaded', [() => { return new NightWalker.Directives.Downloaded() }]);
