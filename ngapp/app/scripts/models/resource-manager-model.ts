﻿/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Models {
    "use strict";

    /**
     * リソース管理モデル
     */
    export class ResourceManager {
        /**
         * 在庫状態
         */
        public get stockState(): StockState {
            return this._stockState
        }
        private _stockState: StockState;

        /**
         * 再生状態
         */
        public playingState: PlayingState;

        /**
         * 取得したリソースリスト
         */
        private resources: IResource[];

        /**
         * 探索対象の在庫置き場を示すアドレス
         */
        private storageAddresses: string[];

        /**
         * 探索が完了した在庫置き場を示すアドレス
         */
        private searchedStorageAddress: string[]

        /**
         * 出荷が完了したリソースリスト
         */
        private shippedResources: IResource[]

        /**
         * 探索ログ
         */
        private searchInformation: string;

        /**
         * コンストラクタ
         */
        constructor(storageAddress: string
            , private queryCreator: Services.SearchQueryCreatorService
            , private searcher: Services.SearchService
            , private reourceComparer: Controllers.IResourceComparer
            , private logger: Services.LoggerService) {
            this._stockState = StockState.NoManagement;
            this.playingState = PlayingState.Play;
            this.resources = [];
            this.storageAddresses = [];
            this.storageAddresses.push(storageAddress);
            this.searchedStorageAddress = [];
            this.shippedResources = [];
        }

        /**
         * 探索を行います。
         */
        public search(): void {
            if (this.hasStock() === false) {
                // 在庫切れなら処理終了
                this._stockState = StockState.OutOfStock;
                return;
            }

            if (this.playingState !== PlayingState.Play) {
                // 再生以外の状態なら処理終了
                return;
            }

            // 探索開始
            this._stockState = StockState.Searching;
            
            // 探索クエリを取得
            var address: string = this.storageAddresses.shift();
            var condition = new Models.SearchCondition(address);
            var query: string = this.queryCreator.getSearchQuery(condition);
            this.searchInformation = this.logger.searchStart(address);

            // 探索実行
            this.searcher.search(query
                , (response: ResourceResponse) => {
                    // 出荷開始
                    this._stockState = StockState.Shipping;

                    // 出荷処理
                    var extractedResources = this.removeDuplicatedResources(response.Resources);
                    this.resources = this.resources.concat(extractedResources);
                    this.shippedResources = this.shippedResources.concat(extractedResources);

                    // 在庫置き場のアドレスを追加
                    var extractedStorageAddress = this.removeDuplicatedStorageAddresses(response.StorageAddresses);
                    this.storageAddresses = this.storageAddresses.concat(extractedStorageAddress);
                    this.searchedStorageAddress.push(address);

                    // 出荷完了
                    this._stockState = StockState.ShippingComplated;

                    // 探索再開
                    this.search();
                }
                , (response: ResourceResponse) => {
                    // 問題発生
                    this._stockState = Models.StockState.ProblemOccurred;
                    this.playingState = Models.PlayingState.Pause;
                    this.searchInformation = this.logger.errorOccurred(response.ErrorMessage);
                });
        }

        /**
         * 在庫があるかどうかを判定します。
         */
        private hasStock(): boolean {
            return (this.storageAddresses.length > 0);
        }

        /**
         * 重複した在庫を除外します。
         */
        private removeDuplicatedResources(resources: IResource[]): IResource[] {
            var extractedResources: IResource[] = [];
            resources.forEach((r, index, rs) => {
                if (this.shippedResources.every((shippedR, index, shippedRs) => {
                    return (this.reourceComparer.equals(r, shippedR) === false);
                })){
                    extractedResources.push(r);
                }
            });

            return extractedResources;
        }

        /**
         * 重複した在庫置き場のアドレスを除外します。
         */
        private removeDuplicatedStorageAddresses(addresses: string[]): string[] {
            return $(addresses).not($(this.searchedStorageAddress)).get();
        }
    }
}