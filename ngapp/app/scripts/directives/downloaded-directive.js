/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * ダウンロード済の状態に遷移する機能を提供します。
         */
        var Downloaded = (function () {
            /**
             * コンストラクタ
             */
            function Downloaded() {
                this.restrict = 'A';
                this.link = function (scope, element) {
                    element.bind('click', function () {
                        // インフォメーションにダウンロード済であることを表示する
                        var info = element.find('.thumbnail-info');
                        info.animate({ height: '100%' }, 200);
                        info.text("Downloaded");
                        info.addClass('thumbnail-info-downloaded');
                    });
                };
            }
            return Downloaded;
        })();
        Directives.Downloaded = Downloaded;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('downloaded', [function () {
    return new NightWalker.Directives.Downloaded();
}]);
//# sourceMappingURL=downloaded-directive.js.map