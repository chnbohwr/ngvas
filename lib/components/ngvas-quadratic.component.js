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
var QuadraticCurveShape_1 = require("../canvas/shapes/QuadraticCurveShape");
var base_component_1 = require("./base.component");
var NgvasQuadraticCurveComponent = (function (_super) {
    __extends(NgvasQuadraticCurveComponent, _super);
    function NgvasQuadraticCurveComponent() {
        return _super.call(this, QuadraticCurveShape_1.QuadraticCurveShape) || this;
    }
    Object.defineProperty(NgvasQuadraticCurveComponent.prototype, "curves", {
        set: function (cs) { this.execOrDelay(function (s) { s.clear(); cs.forEach(function (c) { return s.addCurve(c); }); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasQuadraticCurveComponent;
}(base_component_1.NgvasBaseComponent));
NgvasQuadraticCurveComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-quadratic",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasQuadraticCurveComponent }],
            },] },
];
/** @nocollapse */
NgvasQuadraticCurveComponent.ctorParameters = function () { return []; };
NgvasQuadraticCurveComponent.propDecorators = {
    'curves': [{ type: core_1.Input, args: ["curves",] },],
};
exports.NgvasQuadraticCurveComponent = NgvasQuadraticCurveComponent;
//# sourceMappingURL=ngvas-quadratic.component.js.map