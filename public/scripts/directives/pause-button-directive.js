/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 一時停止ボタンの動作を提供します。
         */
        var PauseButton = (function () {
            /**
             * コンストラクタ
             */
            function PauseButton() {
                this.restrict = 'A';
                this.link = function (scope, element) {
                    scope.$watch('resourceManager.playingState', function (newValue, oldValue) {
                        if (newValue !== undefined && newValue === 2 /* Pause */) {
                            element.addClass('button-selected');
                        }
                        else {
                            element.removeClass('button-selected');
                        }
                    });
                    element.bind('click', function () {
                        // $applyを実行しないと検知してくれない…
                        scope.$apply(function (scope) {
                            scope.resourceManager.playingState = 2 /* Pause */;
                        });
                    });
                };
            }
            return PauseButton;
        })();
        Directives.PauseButton = PauseButton;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('pauseButton', [function () {
    return new NightWalker.Directives.PauseButton();
}]);
//# sourceMappingURL=pause-button-directive.js.map