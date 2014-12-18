/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        /**
         * 探索コントローラ
         */
        var SearchController = (function () {
            /**
             * コンストラクタ
             */
            function SearchController($scope, queryCreator, searcher, reourceComparer) {
                this.$scope = $scope;
                this.queryCreator = queryCreator;
                this.searcher = searcher;
                this.reourceComparer = reourceComparer;
            }
            /**
             * 今までの探索結果をクリアして、新たに探索を行います。
             */
            SearchController.prototype.search = function () {
                // リソース管理の初期化
                this.$scope.resourceManager = new NightWalker.Models.ResourceManager(this.$scope.storageAddress, this.queryCreator, this.searcher, this.reourceComparer);
                // 検索実行
                this.$scope.resourceManager.search();
            };
            return SearchController;
        })();
        Controllers.SearchController = SearchController;
    })(Controllers = NightWalker.Controllers || (NightWalker.Controllers = {}));
})(NightWalker || (NightWalker = {}));
angular.module('NightWalker.Controllers').controller('SearchController', ['$scope', 'SearchQueryCreatorService', 'SearchService', 'ImageComparerService', NightWalker.Controllers.SearchController]);
//# sourceMappingURL=search-controller.js.map