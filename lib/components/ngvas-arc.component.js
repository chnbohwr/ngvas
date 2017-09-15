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
var ArcShape_1 = require("../canvas/shapes/ArcShape");
var base_component_1 = require("./base.component");
var NgvasArcComponent = (function (_super) {
    __extends(NgvasArcComponent, _super);
    function NgvasArcComponent() {
        return _super.call(this, ArcShape_1.ArcShape) || this;
    }
    Object.defineProperty(NgvasArcComponent.prototype, "connectToCenter", {
        set: function (c) {
            this.execOrDelay(function (s) { return s.connectToCenter(c); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasArcComponent.prototype, "radius", {
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
    Object.defineProperty(NgvasArcComponent.prototype, "angle", {
        set: function (v) {
            if (Array.isArray(v)) {
                this.execOrDelay(function (s) { return s.withAngle(v[0], v[1], v[2], v[3]); });
            }
            else {
                this.execOrDelay(function (s) { return s.withAngle(v); });
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgvasArcComponent;
}(base_component_1.NgvasBaseComponent));
NgvasArcComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-arc",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasArcComponent }],
            },] },
];
/** @nocollapse */
NgvasArcComponent.ctorParameters = function () { return []; };
NgvasArcComponent.propDecorators = {
    'connectToCenter': [{ type: core_1.Input, args: ["connectToCenter",] },],
    'radius': [{ type: core_1.Input, args: ["radius",] },],
    'angle': [{ type: core_1.Input, args: ["angle",] },],
};
exports.NgvasArcComponent = NgvasArcComponent;
//# sourceMappingURL=ngvas-arc.component.js.map