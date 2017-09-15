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
var PolyShape_1 = require("../canvas/shapes/PolyShape");
var base_component_1 = require("./base.component");
var NgvasPolygonComponent = (function (_super) {
    __extends(NgvasPolygonComponent, _super);
    function NgvasPolygonComponent() {
        return _super.call(this, PolyShape_1.PolyShape) || this;
    }
    Object.defineProperty(NgvasPolygonComponent.prototype, "sides", {
        set: function (ls) {
            this.execOrDelay(function (s) {
                s.clear();
                for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
                    var l = ls_1[_i];
                    if (l.length === 2) {
                        s.addLine(l);
                    }
                    else if (l.length === 3) {
                        s.addQuadratic(l);
                    }
                    else if (l.length === 4) {
                        s.addBezier(l);
                    }
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasPolygonComponent;
}(base_component_1.NgvasBaseComponent));
NgvasPolygonComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-polygon",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasPolygonComponent }],
            },] },
];
/** @nocollapse */
NgvasPolygonComponent.ctorParameters = function () { return []; };
NgvasPolygonComponent.propDecorators = {
    'sides': [{ type: core_1.Input, args: ["sides",] },],
};
exports.NgvasPolygonComponent = NgvasPolygonComponent;
//# sourceMappingURL=ngvas-polygon.component.js.map