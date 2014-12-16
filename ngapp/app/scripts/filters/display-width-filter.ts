/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Filters {
    "use strict";

    /**
    * 表示上の横幅に整形するフィルタ機能を提供します。
    */
    angular.module('NightWalker.Filters')
        .filter('displayWidth', () => {
            return (image: NightWalker.Models.Image): string => {
                return (Math.round(image.width * (167 / image.height))) + 'px;';
            }
        })
};