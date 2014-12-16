/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        /**
         * 検索コントローラ
         */
        var SearchController = (function () {
            /**
             * コンストラクタ
             */
            function SearchController($scope, queryCreator) {
                this.$scope = $scope;
                this.queryCreator = queryCreator;
            }
            SearchController.prototype.search = function () {
                // 検索クエリを取得
                var condition = new NightWalker.Models.SearchCondition(this.$scope.searchUrl);
                var query = this.queryCreator.getSearchQuery(condition);
                alert('search execute query -> ' + query);
            };
            return SearchController;
        })();
        Controllers.SearchController = SearchController;
    })(Controllers = NightWalker.Controllers || (NightWalker.Controllers = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Controllers').controller('SearchController', ['$scope', 'SearchQueryCreatorService', NightWalker.Controllers.SearchController]);
//# sourceMappingURL=search-controller.js.map