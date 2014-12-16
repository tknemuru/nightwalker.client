/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 検索条件の作成機能を提供します。
         */
        var VideoWindow = (function () {
            /**
             * コンストラクタ
             */
            function VideoWindow($sce) {
                this.restrict = 'A';
                this.replace = true;
                this.scope = {};
                this.templateUrl = '/scripts/templates/video-window-pc-template.html';
                this.link = function (scope, element, attr) {
                    scope.videoUrl = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + attr.videoWindow + '?wmode=transparent&autoplay=1&theme=dark&controls=1&autohide=0&loop=0&showinfo=0');
                };
            }
            return VideoWindow;
        })();
        Directives.VideoWindow = VideoWindow;
    })(Directives = NightWalker.Directives || (NightWalker.Directives = {}));
})(NightWalker || (NightWalker = {}));
angular.module('Nihachilab.Directives').directive('videoWindow', ['$sce', function ($sce) {
    return new Nihachilab.Directives.VideoWindow($sce);
}]);
//# sourceMappingURL=search-box-directive.js.map