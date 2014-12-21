/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 再生ボタンの動作を提供します。
         */
        var PlayButton = (function () {
            /**
             * コンストラクタ
             */
            function PlayButton() {
                this.restrict = 'A';
                this.link = function (scope, element) {
                    scope.$watch('resourceManager.playingState', function (newValue, oldValue) {
                        if (newValue !== undefined && newValue === 1 /* Play */) {
                            element.addClass('button-selected');
                            if (oldValue === 2 /* Pause */ && newValue === 1 /* Play */) {
                                // 停止→作業再開
                                scope.resourceManager.search();
                            }
                        }
                        else {
                            element.removeClass('button-selected');
                        }
                    });
                    element.bind('click', function () {
                        // $applyを実行しないと検知してくれない…
                        scope.$apply(function (scope) {
                            scope.resourceManager.playingState = 1 /* Play */;
                        });
                    });
                };
            }
            return PlayButton;
        })();
        Directives.PlayButton = PlayButton;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('playButton', [function () {
    return new NightWalker.Directives.PlayButton();
}]);
//# sourceMappingURL=play-button-directive.js.map