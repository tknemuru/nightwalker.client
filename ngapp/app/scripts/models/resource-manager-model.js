/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * リソース管理モデル
         */
        var ResourceManager = (function () {
            /**
             * コンストラクタ
             */
            function ResourceManager(storageAddress, queryCreator, searcher, reourceComparer, logger) {
                this.queryCreator = queryCreator;
                this.searcher = searcher;
                this.reourceComparer = reourceComparer;
                this.logger = logger;
                this._stockState = 0 /* NoManagement */;
                this.resources = [];
                this.storageAddresses = [];
                this.storageAddresses.push(storageAddress);
                this.searchedStorageAddress = [];
                this.shippedResources = [];
            }
            Object.defineProperty(ResourceManager.prototype, "stockState", {
                /**
                 * 在庫状態
                 */
                get: function () {
                    return this._stockState;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 探索を行います。
             */
            ResourceManager.prototype.search = function () {
                var _this = this;
                if (this.hasStock() === false) {
                    // 在庫切れなら処理終了
                    this._stockState = 4 /* OutOfStock */;
                    return;
                }
                // 探索開始
                this._stockState = 1 /* Searching */;
                // 探索クエリを取得
                var address = this.storageAddresses.shift();
                var condition = new Models.SearchCondition(address);
                var query = this.queryCreator.getSearchQuery(condition);
                this.searchInformation = this.logger.searchStart(address);
                // 探索実行
                this.searcher.search(query, function (response) {
                    // 出荷開始
                    _this._stockState = 2 /* Shipping */;
                    // 出荷処理
                    var extractedResources = _this.removeDuplicatedResources(response.Resources);
                    _this.resources = _this.resources.concat(extractedResources);
                    _this.shippedResources = _this.shippedResources.concat(extractedResources);
                    // 在庫置き場のアドレスを追加
                    var extractedStorageAddress = _this.removeDuplicatedStorageAddresses(response.StorageAddresses);
                    _this.storageAddresses = _this.storageAddresses.concat(extractedStorageAddress);
                    _this.searchedStorageAddress.push(address);
                    // 出荷完了
                    _this._stockState = 3 /* ShippingComplated */;
                    // 探索再開
                    _this.search();
                });
            };
            /**
             * 在庫があるかどうかを判定します。
             */
            ResourceManager.prototype.hasStock = function () {
                return (this.storageAddresses.length > 0);
            };
            /**
             * 重複した在庫を除外します。
             */
            ResourceManager.prototype.removeDuplicatedResources = function (resources) {
                var _this = this;
                var extractedResources = [];
                resources.forEach(function (r, index, rs) {
                    if (_this.shippedResources.every(function (shippedR, index, shippedRs) {
                        return (_this.reourceComparer.equals(r, shippedR) === false);
                    })) {
                        extractedResources.push(r);
                    }
                });
                return extractedResources;
            };
            /**
             * 重複した在庫置き場のアドレスを除外します。
             */
            ResourceManager.prototype.removeDuplicatedStorageAddresses = function (addresses) {
                return $(addresses).not($(this.searchedStorageAddress)).get();
            };
            return ResourceManager;
        })();
        Models.ResourceManager = ResourceManager;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=resource-manager-model.js.map