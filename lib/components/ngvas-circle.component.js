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
var CircleShape_1 = require("../canvas/shapes/CircleShape");
var base_component_1 = require("./base.component");
var NgvasCircleComponent = (function (_super) {
    __extends(NgvasCircleComponent, _super);
    function NgvasCircleComponent() {
        return _super.call(this, CircleShape_1.CircleShape) || this;
    }
    Object.defineProperty(NgvasCircleComponent.prototype, "radius", {
        set: function (v) {
            if (Array.isArray(v)) {
                this.execOrDelay(function (s) { return s.withRadius(v[0], v[1], v[2], v[3]); });
            }
            else {
                this.execOrDelay(function (s) { return s.withRadius(v); });
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgvasCircleComponent;
}(base_component_1.NgvasBaseComponent));
NgvasCircleComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-circle",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasCircleComponent }],
            },] },
];
/** @nocollapse */
NgvasCircleComponent.ctorParameters = function () { return []; };
NgvasCircleComponent.propDecorators = {
    'radius': [{ type: core_1.Input, args: ["radius",] },],
};
exports.NgvasCircleComponent = NgvasCircleComponent;
//# sourceMappingURL=ngvas-circle.component.js.map