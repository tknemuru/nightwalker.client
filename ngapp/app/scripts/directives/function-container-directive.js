/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 機能コンテナの動作を提供します。
         */
        var FunctionContainer = (function () {
            /**
             * コンストラクタ
             */
            function FunctionContainer() {
                this.restrict = 'A';
                this.link = function (scope, element) {
                    // 探索が開始されたら表示する
                    scope.$watch('resourceManager.stockState', function (newValue, oldValue) {
                        if (newValue !== undefined && newValue !== 0 /* NoManagement */) {
                            element.animate({ height: '80px' }, 200);
                        }
                    });
                };
            }
            return FunctionContainer;
        })();
        Directives.FunctionContainer = FunctionContainer;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('functionContainer', [function () {
    return new NightWalker.Directives.FunctionContainer();
}]);
//# sourceMappingURL=function-container-directive.js.map