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
var TextShape_1 = require("../canvas/shapes/TextShape");
var base_component_1 = require("./base.component");
var NgvasTextComponent = (function (_super) {
    __extends(NgvasTextComponent, _super);
    function NgvasTextComponent() {
        return _super.call(this, TextShape_1.TextShape) || this;
    }
    Object.defineProperty(NgvasTextComponent.prototype, "text", {
        set: function (t) { this.execOrDelay(function (s) { return s.text = t; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasTextComponent.prototype, "textStyle", {
        set: function (t) {
            this.execOrDelay(function (s) { return s.textStyle(t.font, t.align, t.baseline); });
        },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasTextComponent;
}(base_component_1.NgvasBaseComponent));
NgvasTextComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-text",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasTextComponent }],
            },] },
];
/** @nocollapse */
NgvasTextComponent.ctorParameters = function () { return []; };
NgvasTextComponent.propDecorators = {
    'text': [{ type: core_1.Input, args: ["text",] },],
    'textStyle': [{ type: core_1.Input, args: ["textStyle",] },],
};
exports.NgvasTextComponent = NgvasTextComponent;
//# sourceMappingURL=ngvas-text.component.js.map