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
var RectShape_1 = require("../canvas/shapes/RectShape");
var base_component_1 = require("./base.component");
var NgvasRectangleComponent = (function (_super) {
    __extends(NgvasRectangleComponent, _super);
    function NgvasRectangleComponent() {
        return _super.call(this, RectShape_1.RectShape) || this;
    }
    return NgvasRectangleComponent;
}(base_component_1.NgvasBaseComponent));
NgvasRectangleComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-rectangle",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasRectangleComponent }],
            },] },
];
/** @nocollapse */
NgvasRectangleComponent.ctorParameters = function () { return []; };
exports.NgvasRectangleComponent = NgvasRectangleComponent;
//# sourceMappingURL=ngvas-rectange.component.js.map