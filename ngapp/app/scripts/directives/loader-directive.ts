/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Directives {
    "use strict";

    /**
     * ローディング状態の遷移に関する機能を提供します。
     */
    export class Loader implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor() {
            this.restrict = 'A';
            this.link = (scope: Controllers.ISearchConditionScope, element: ng.IAugmentedJQuery) => {
                scope.$watch('isSearching', (newValue: boolean, oldValue: boolean) => {
                    if (newValue === true) {
                        element.removeClass('loader-none');
                        element.addClass('loader');
                    }
                    else {
                        element.removeClass('loader');
                        element.addClass('loader-none');
                    }
                });
            };
        }
    }
}
angular.module('NightWalker.Directives')
    .directive('loader', [() => { return new NightWalker.Directives.Loader() }]);
