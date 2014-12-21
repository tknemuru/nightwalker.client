/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Directives {
    "use strict";

    /**
     * 一時停止ボタンの動作を提供します。
     */
    export class PauseButton implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor() {
            this.restrict = 'A';
            this.link = (scope: Controllers.ISearchConditionScope, element: ng.IAugmentedJQuery) => {
                scope.$watch('resourceManager.playingState', (newValue: Models.PlayingState, oldValue: Models.PlayingState) => {
                    if (newValue !== undefined && newValue === Models.PlayingState.Pause) {
                        element.addClass('button-selected');
                    }
                    else {
                        element.removeClass('button-selected');
                    }
                });

                element.bind('click', () => {
                    // $applyを実行しないと検知してくれない…
                    scope.$apply((scope: Controllers.ISearchConditionScope) => {
                        scope.resourceManager.playingState = Models.PlayingState.Pause;
                    });                    
                });
            };
        }
    }
}
angular.module('NightWalker.Directives')
    .directive('pauseButton', [() => { return new NightWalker.Directives.PauseButton() }]);
