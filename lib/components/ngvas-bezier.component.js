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
var BezierCurveShape_1 = require("../canvas/shapes/BezierCurveShape");
var base_component_1 = require("./base.component");
var NgvasBezierCurveComponent = (function (_super) {
    __extends(NgvasBezierCurveComponent, _super);
    function NgvasBezierCurveComponent() {
        return _super.call(this, BezierCurveShape_1.BezierCurveShape) || this;
    }
    Object.defineProperty(NgvasBezierCurveComponent.prototype, "curves", {
        set: function (cs) { this.execOrDelay(function (s) { s.clear(); cs.forEach(function (c) { return s.addCurve(c); }); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasBezierCurveComponent;
}(base_component_1.NgvasBaseComponent));
NgvasBezierCurveComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-bezier",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasBezierCurveComponent }],
            },] },
];
/** @nocollapse */
NgvasBezierCurveComponent.ctorParameters = function () { return []; };
NgvasBezierCurveComponent.propDecorators = {
    'curves': [{ type: core_1.Input, args: ["curves",] },],
};
exports.NgvasBezierCurveComponent = NgvasBezierCurveComponent;
//# sourceMappingURL=ngvas-bezier.component.js.map