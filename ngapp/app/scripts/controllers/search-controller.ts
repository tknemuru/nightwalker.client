/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module NightWalker.Controllers {
    "use strict";

    /**
     * $svopeインターフェイス
     */
    export interface ISearchConditionScope extends ng.IScope {
        /**
         * 検索対象のURL
         */
        searchUrl: string;

        /**
         * 検索結果の画像リスト
         */
        images: Models.Image[];

        /**
         * バッファとして保持している次に検索するURLリスト
         */
        buffeHrefs: string[];

        /**
         * バッファとして保持している画像リスト
         */
        buffeImages: Models.Image[];

        /**
         * 検索中かどうか
         */
        isSeaching: boolean;

        /**
         * 検索が完了したURL
         */
        searchCompletedUrls: string[];

        /**
         * 表示が完了した画像URL
         */
        loadCompletedImageUrls: string[];
    }

    /**
     * 検索コントローラ
     */
    export class SearchController {
        /**
         * コンストラクタ
         */
        constructor(private $scope: ISearchConditionScope
            , private queryCreator: Services.SearchQueryCreatorService
            , private searcher: Services.SearchService) {
        }

        /**
         * 今までの検索結果をクリアして、新たに検索を行います。
         */
        public search(): void {
            // $scopeの初期化
            this.initializeSearchScope();

            // 検索先URLを$scopeのバッファにセットしておく
            this.$scope.buffeHrefs.push(this.$scope.searchUrl);

            // 検索実行
            this.andSearch();
        }

        /**
         * 今までの検索結果を保持したまま、追加で検索を行います。
         */
        public andSearch(): void {
            var isFirstSearch = true;

            while (isFirstSearch === true || ((this.$scope.images.length + 1) % 30) > 0) {
                isFirstSearch = false;
                if (this.$scope.buffeImages.length > 0) {
                    // バッファから画像を表示する
                    // 表示済画像URLとして入れておく
                    var image = this.$scope.buffeImages.shift();
                    this.$scope.loadCompletedImageUrls.push(image.url);
                    this.$scope.images.push(image);
                }
                else if (this.$scope.buffeHrefs.length > 0) {
                    // 検索中の場合は新たに検索しにいかない
                    if (this.$scope.isSeaching === true) {
                        break;
                    }

                    // 次の検索先がある場合は、新たな画像を検索しにいく
                    // 検索クエリを取得
                    var url: string = this.$scope.buffeHrefs.shift();
                    // 検索するURLは検索済URLに入れておく
                    this.$scope.searchCompletedUrls.push(url);
                    var condition = new Models.SearchCondition(url);
                    var query: string = this.queryCreator.getSearchQuery(condition);

                    // 検索実行
                    this.$scope.isSeaching = true;
                    $('#loader').removeClass('loader-none');
                    $('#loader').addClass('loader');
                    this.searcher.search(query
                        , (data: Models.ImageResponse) => {
                            var newImages: Models.Image[] = this.minusLoadedImages(data.Images);
                            this.$scope.buffeImages = this.$scope.buffeImages.concat(newImages);
                            var newUrls: string[] = $(data.Hrefs).not($(this.$scope.searchCompletedUrls)).get();
                            this.$scope.buffeHrefs = this.$scope.buffeHrefs.concat(newUrls);

                            // 再帰呼び出し
                            this.$scope.isSeaching = false;
                            $('#loader').removeClass('loader');
                            $('#loader').addClass('loader-none');
                            this.andSearch();
                        });

                    // 結果を受取るまで時間がかかるので、今回はおしまいにする
                    break;
                }
                else {
                    // 在庫切れ
                    break;
                }
            }
        }

        /**
         * $scopeの初期化を行います。
         */
        private initializeSearchScope(): void {
            this.$scope.images = [];
            this.$scope.buffeImages = [];
            this.$scope.buffeHrefs = [];
            this.$scope.isSeaching = false;
            this.$scope.searchCompletedUrls = [];
            this.$scope.loadCompletedImageUrls = [];
        }

        /**
         * 表示済の画像を除外します。
         */
        private minusLoadedImages(newImages: Models.Image[]): Models.Image[] {
            var minusdNewImage: Models.Image[] = [];
            newImages.forEach((image, index, images) => {
                if (this.$scope.loadCompletedImageUrls.indexOf(image.url) < 0) {
                    minusdNewImage.push(image);
                }
            });

            return minusdNewImage;
        }
    }
}
angular.module('NightWalker.Controllers')
    .controller('SearchController', ['$scope', 'SearchQueryCreatorService', 'SearchService', NightWalker.Controllers.SearchController]);
