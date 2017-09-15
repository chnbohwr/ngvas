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
var BaseStyle_1 = require("../styles/BaseStyle");
var interfaces_1 = require("./interfaces");
/**
 * Draws a filled and/or stroked rectangle.
 */
var RectShape = (function (_super) {
    __extends(RectShape, _super);
    function RectShape(canvas, ctx, name) {
        if (name === void 0) { name = "Rect_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        return _super.call(this, canvas, ctx, name) || this;
    }
    Object.defineProperty(RectShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    RectShape.prototype.traceShape = function (ctx) {
        if (this.styleManager.hasFill) {
            ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
        if (this.styleManager.hasStroke) {
            ctx.strokeRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
    };
    RectShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return RectShape;
}(BaseStyle_1.BaseStyle));
exports.RectShape = RectShape;
//# sourceMappingURL=RectShape.js.map