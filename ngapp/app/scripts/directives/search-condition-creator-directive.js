/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 検索条件の作成機能を提供します。
         */
        var SearchConditionCreator = (function () {
            /**
             * コンストラクタ
             */
            function SearchConditionCreator() {
                this.restrict = 'A';
                //this.replace = true;
                //this.scope = {
                //    searchUrl: '='
                //};
                //this.templateUrl = '/scripts/templates/video-window-pc-template.html';
                this.link = function (scope, element) {
                    element.bind('click', function () {
                        alert(scope.searchUrl);
                    });
                };
            }
            return SearchConditionCreator;
        })();
        Directives.SearchConditionCreator = SearchConditionCreator;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Directives').directive('searchConditionCreator', [function () {
    return new NightWalker.Directives.SearchConditionCreator();
}]);
//# sourceMappingURL=search-condition-creator-directive.js.map