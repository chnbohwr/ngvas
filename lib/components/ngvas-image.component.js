"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageShape_1 = require("../canvas/shapes/ImageShape");
var base_component_1 = require("./base.component");
var NgvasImageComponent = (function (_super) {
    __extends(NgvasImageComponent, _super);
    function NgvasImageComponent() {
        return _super.call(this, ImageShape_1.ImageShape) || this;
    }
    Object.defineProperty(NgvasImageComponent.prototype, "src", {
        set: function (i) { this.execOrDelay(function (s) { return s.withImage(i); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasImageComponent;
}(base_component_1.NgvasBaseComponent));
NgvasImageComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-image",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasImageComponent }],
            },] },
];
/** @nocollapse */
NgvasImageComponent.ctorParameters = function () { return []; };
NgvasImageComponent.propDecorators = {
    'src': [{ type: core_1.Input, args: ["src",] },],
};
exports.NgvasImageComponent = NgvasImageComponent;
//# sourceMappingURL=ngvas-image.component.js.map