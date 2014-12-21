/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * 作業状態
         */
        (function (PlayingState) {
            /**
             * 未管理
             */
            PlayingState[PlayingState["NoManagement"] = 0] = "NoManagement";
            /**
             * 作業中
             */
            PlayingState[PlayingState["Play"] = 1] = "Play";
            /**
             * 一時停止
             */
            PlayingState[PlayingState["Pause"] = 2] = "Pause";
        })(Models.PlayingState || (Models.PlayingState = {}));
        var PlayingState = Models.PlayingState;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=playing-state-model.js.map