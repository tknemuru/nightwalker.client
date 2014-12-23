"use strict";angular.module("NightWalker",["NightWalker.Services","NightWalker.Filters","NightWalker.Directives","NightWalker.Controllers"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("NightWalker.Services",[]),angular.module("NightWalker.Filters",[]),angular.module("NightWalker.Directives",[]),angular.module("NightWalker.Controllers",["NightWalker.Services","NightWalker.Filters","NightWalker.Directives"]);var NightWalker;!function(a){!function(a){a[a.Development=0]="Development",a[a.Production=1]="Production"}(a.Environment||(a.Environment={}));var b=(a.Environment,function(){function a(){}return a.getEnvironment=function(){return 1},a.getBaseApiUrl=function(){return 1===a.getEnvironment()?"http://nightwalker-api/api/v1/":"http://localhost:8080/api/v1/"},a}());a.AppConfig=b}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){!function(a){a[a.NoManagement=0]="NoManagement",a[a.Searching=1]="Searching",a[a.Shipping=2]="Shipping",a[a.ShippingComplated=3]="ShippingComplated",a[a.OutOfStock=4]="OutOfStock",a[a.ProblemOccurred=5]="ProblemOccurred"}(a.StockState||(a.StockState={}));a.StockState}(b=a.Models||(a.Models={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){!function(a){a[a.NoManagement=0]="NoManagement",a[a.Play=1]="Play",a[a.Pause=2]="Pause"}(a.PlayingState||(a.PlayingState={}));a.PlayingState}(b=a.Models||(a.Models={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(){}(b=a.Models||(a.Models={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){var b=function(){function a(a){this.url=a}return a}();a.SearchCondition=b}(b=a.Models||(a.Models={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){var b=function(){function a(a,b,c){this.url=a,this.width=b,this.height=c}return a}();a.Image=b}(b=a.Models||(a.Models={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){var b=function(){function a(a,b,c){this.Resources=a,this.StorageAddresses=b,this.ErrorMessage=c}return a}();a.ResourceResponse=b}(b=a.Models||(a.Models={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){var b=function(){function b(a,b,c,d,e){this.queryCreator=b,this.searcher=c,this.reourceComparer=d,this.logger=e,this._stockState=0,this.playingState=1,this.resources=[],this.storageAddresses=[],this.storageAddresses.push(a),this.searchedStorageAddress=[],this.shippedResources=[]}return Object.defineProperty(b.prototype,"stockState",{get:function(){return this._stockState},enumerable:!0,configurable:!0}),b.prototype.search=function(){var b=this;if(this.hasStock()===!1)return void(this._stockState=4);if(1===this.playingState){this._stockState=1;var c=this.storageAddresses.shift(),d=new a.SearchCondition(c),e=this.queryCreator.getSearchQuery(d);this.searchInformation=this.logger.searchStart(c),this.searcher.search(e,function(a){b._stockState=2;var d=b.removeDuplicatedResources(a.Resources);b.resources=b.resources.concat(d),b.shippedResources=b.shippedResources.concat(d);var e=b.removeDuplicatedStorageAddresses(a.StorageAddresses);b.storageAddresses=b.storageAddresses.concat(e),b.searchedStorageAddress.push(c),b._stockState=3,b.search()},function(a){b._stockState=5,b.playingState=2,b.searchInformation=b.logger.errorOccurred(a.ErrorMessage)})}},b.prototype.hasStock=function(){return this.storageAddresses.length>0},b.prototype.removeDuplicatedResources=function(a){var b=this,c=[];return a.forEach(function(a){b.shippedResources.every(function(c){return b.reourceComparer.equals(a,c)===!1})&&c.push(a)}),c},b.prototype.removeDuplicatedStorageAddresses=function(a){return $(a).not($(this.searchedStorageAddress)).get()},b}();a.ResourceManager=b}(b=a.Models||(a.Models={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){var b=function(){function a(){}return a.prototype.equals=function(a,b){return a.url===b.url},a}();a.ImageComparerService=b}(b=a.Services||(a.Services={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Services").service("ImageComparerService",[NightWalker.Services.ImageComparerService]);var NightWalker;!function(a){var b;!function(b){var c=function(){function b(){this.baseApiUrl=a.AppConfig.getBaseApiUrl()+"url/images/"}return b.prototype.getSearchQuery=function(a){var b=this.baseApiUrl;return b+="?target="+encodeURIComponent(a.url)},b}();b.SearchQueryCreatorService=c}(b=a.Services||(a.Services={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Services").service("SearchQueryCreatorService",[NightWalker.Services.SearchQueryCreatorService]);var NightWalker;!function(a){var b;!function(a){var b=function(){function a(a){this.$http=a}return a.prototype.search=function(a,b,c){void 0===c&&(c=null),this.$http.get(a).success(b).error(c)},a}();a.SearchService=b}(b=a.Services||(a.Services={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Services").service("SearchService",["$http",NightWalker.Services.SearchService]);var NightWalker;!function(a){var b;!function(a){var b=function(){function a(){this.SearchingStr=a.DefaultSearchingStr}return a.prototype.searchStart=function(b){return this.SearchingStr=a.DefaultSearchingStr,"walking start -> "+b},a.prototype.searching=function(){return this.SearchingStr+=".",this.SearchingStr},a.prototype.errorOccurred=function(a){return"sorry, error occurred. "+a},a.DefaultSearchingStr="Now Walking",a}();a.LoggerService=b}(b=a.Services||(a.Services={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Services").service("LoggerService",[NightWalker.Services.LoggerService]);var NightWalker;!function(a){var b;!function(){angular.module("NightWalker.Filters").filter("displayWidth",function(){return function(a){return Math.round(a.width*(167/a.height))+"px;"}})}(b=a.Filters||(a.Filters={}))}(NightWalker||(NightWalker={}));var NightWalker;!function(a){var b;!function(a){var b=function(){function a(){this.restrict="A",this.link=function(a,b){b.bind("click",function(){var a=b.find(".thumbnail-info");a.animate({height:"100%"},200),a.text("Downloaded"),a.addClass("thumbnail-info-downloaded")})}}return a}();a.Downloaded=b}(b=a.Directives||(a.Directives={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Directives").directive("downloaded",[function(){return new NightWalker.Directives.Downloaded}]);var NightWalker;!function(a){var b;!function(a){var b=function(){function a(){this.restrict="A",this.link=function(a,b){a.$watch("resourceManager.stockState",function(a){1===a?(b.removeClass("loader-none"),b.addClass("loader")):(b.removeClass("loader"),b.addClass("loader-none"))})}}return a}();a.Loader=b}(b=a.Directives||(a.Directives={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Directives").directive("loader",[function(){return new NightWalker.Directives.Loader}]);var NightWalker;!function(a){var b;!function(a){var b=function(){function a(){this.restrict="A",this.link=function(a,b){a.$watch("resourceManager.stockState",function(a){void 0!==a&&0!==a&&b.animate({height:"80px"},200)})}}return a}();a.FunctionContainer=b}(b=a.Directives||(a.Directives={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Directives").directive("functionContainer",[function(){return new NightWalker.Directives.FunctionContainer}]);var NightWalker;!function(a){var b;!function(a){var b=function(){function a(a,b){var c=this;this.$compile=a,this.logger=b,this.infoSeqNo=0,this.restrict="A",this.link=function(a,d){setInterval(function(){void 0!==a.resourceManager&&1==a.resourceManager.stockState&&c.write(a,d,b.searching())},1e3),a.$watch("resourceManager.searchInformation",function(b){c.write(a,d,b)})}}return a.prototype.write=function(a,b,c){void 0!==c&&(b.children("#info-"+(this.infoSeqNo-4)).remove(),b.append(this.$compile('<div id="info-'+this.infoSeqNo+'">'+c+"</div>")(a)),this.infoSeqNo++)},a}();a.InformationBoard=b}(b=a.Directives||(a.Directives={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Directives").directive("informationBoard",["$compile","LoggerService",function(a,b){return new NightWalker.Directives.InformationBoard(a,b)}]);var NightWalker;!function(a){var b;!function(a){var b=function(){function a(){this.restrict="A",this.link=function(a,b){a.$watch("resourceManager.playingState",function(c,d){void 0!==c&&1===c?(b.addClass("button-selected"),2===d&&1===c&&a.resourceManager.search()):b.removeClass("button-selected")}),b.bind("click",function(){a.$apply(function(a){a.resourceManager.playingState=1})})}}return a}();a.PlayButton=b}(b=a.Directives||(a.Directives={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Directives").directive("playButton",[function(){return new NightWalker.Directives.PlayButton}]);var NightWalker;!function(a){var b;!function(a){var b=function(){function a(){this.restrict="A",this.link=function(a,b){a.$watch("resourceManager.playingState",function(a){void 0!==a&&2===a?b.addClass("button-selected"):b.removeClass("button-selected")}),b.bind("click",function(){a.$apply(function(a){a.resourceManager.playingState=2})})}}return a}();a.PauseButton=b}(b=a.Directives||(a.Directives={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Directives").directive("pauseButton",[function(){return new NightWalker.Directives.PauseButton}]);var NightWalker;!function(a){var b;!function(b){var c=function(){function b(a,b,c,d,e){this.$scope=a,this.queryCreator=b,this.searcher=c,this.reourceComparer=d,this.logger=e}return b.prototype.search=function(){this.$scope.resourceManager=new a.Models.ResourceManager(this.$scope.storageAddress,this.queryCreator,this.searcher,this.reourceComparer,this.logger),this.$scope.resourceManager.search()},b}();b.SearchController=c}(b=a.Controllers||(a.Controllers={}))}(NightWalker||(NightWalker={})),angular.module("NightWalker.Controllers").controller("SearchController",["$scope","SearchQueryCreatorService","SearchService","ImageComparerService","LoggerService",NightWalker.Controllers.SearchController]);