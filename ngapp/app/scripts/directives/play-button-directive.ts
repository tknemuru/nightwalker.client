/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Directives {
    "use strict";

    /**
     * 再生ボタンの動作を提供します。
     */
    export class PlayButton implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor() {
            this.restrict = 'A';
            this.link = (scope: Controllers.ISearchConditionScope, element: ng.IAugmentedJQuery) => {
                scope.$watch('resourceManager.playingState', (newValue: Models.PlayingState, oldValue: Models.PlayingState) => {
                    if (newValue !== undefined && newValue === Models.PlayingState.Play) {
                        element.addClass('button-selected');

                        if (oldValue === Models.PlayingState.Pause && newValue === Models.PlayingState.Play) {
                            // 停止→作業再開
                            scope.resourceManager.search();
                        }
                    }
                    else {
                        element.removeClass('button-selected');
                    }
                });

                element.bind('click', () => {
                    // $applyを実行しないと検知してくれない…
                    scope.$apply((scope: Controllers.ISearchConditionScope) => {
                        scope.resourceManager.playingState = Models.PlayingState.Play;
                    });    
                });
            };
        }
    }
}
angular.module('NightWalker.Directives')
    .directive('playButton', [() => { return new NightWalker.Directives.PlayButton() }]);
