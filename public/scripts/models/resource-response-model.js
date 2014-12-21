/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var NightWalker;
(function (NightWalker) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * リソースレスポンスモデル
         */
        var ResourceResponse = (function () {
            /**
             * コンストラクタ
             */
            function ResourceResponse(Resources, StorageAddresses, ErrorMessage) {
                this.Resources = Resources;
                this.StorageAddresses = StorageAddresses;
                this.ErrorMessage = ErrorMessage;
            }
            return ResourceResponse;
        })();
        Models.ResourceResponse = ResourceResponse;
    })(Models = NightWalker.Models || (NightWalker.Models = {}));
})(NightWalker || (NightWalker = {}));
//# sourceMappingURL=resource-response-model.js.map