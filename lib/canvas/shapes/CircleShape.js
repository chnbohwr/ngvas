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
var interfaces_1 = require("./interfaces");
var BaseStyle_1 = require("../styles/BaseStyle");
var MathPIx2 = 6.2832; // 2 * Math.PI;
/**
 * Draws a filled and/or stroked circle.
 */
var CircleShape = (function (_super) {
    __extends(CircleShape, _super);
    function CircleShape(canvas, ctx, name) {
        if (name === void 0) { name = "Circle_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        return _super.call(this, canvas, ctx, name) || this;
    }
    Object.defineProperty(CircleShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "width", {
        set: function (v) { throw new ReferenceError("LineShape width cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "height", {
        set: function (v) { throw new ReferenceError("LineShape height cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "radius", {
        get: function () {
            return this.boundary.width / 2;
        },
        set: function (r) {
            this.boundary.reset();
            this.boundary.setPoint([-r, -r]);
            this.boundary.setPoint([r, r]);
            if (this.originToCenter) {
                this.originToCenter = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    CircleShape.prototype.withRadius = function (r, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback, 5);
        }
        else {
            this.radius = r;
        }
        return this;
    };
    CircleShape.prototype.traceShape = function (ctx) {
        ctx.beginPath();
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, MathPIx2);
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    CircleShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return CircleShape;
}(BaseStyle_1.BaseStyle));
exports.CircleShape = CircleShape;
//# sourceMappingURL=CircleShape.js.map