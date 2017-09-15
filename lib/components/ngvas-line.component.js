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
var LineShape_1 = require("../canvas/shapes/LineShape");
var base_component_1 = require("./base.component");
var NgvasLineComponent = (function (_super) {
    __extends(NgvasLineComponent, _super);
    function NgvasLineComponent() {
        return _super.call(this, LineShape_1.LineShape) || this;
    }
    Object.defineProperty(NgvasLineComponent.prototype, "lines", {
        set: function (ls) { this.execOrDelay(function (s) { s.clear(); ls.forEach(function (l) { return s.addLine(l); }); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasLineComponent;
}(base_component_1.NgvasBaseComponent));
NgvasLineComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-line",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasLineComponent }],
            },] },
];
/** @nocollapse */
NgvasLineComponent.ctorParameters = function () { return []; };
NgvasLineComponent.propDecorators = {
    'lines': [{ type: core_1.Input, args: ["lines",] },],
};
exports.NgvasLineComponent = NgvasLineComponent;
//# sourceMappingURL=ngvas-line.component.js.map