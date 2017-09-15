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
 * Draws a stroked line.
 */
var QuadraticCurveShape = (function (_super) {
    __extends(QuadraticCurveShape, _super);
    function QuadraticCurveShape(canvas, ctx, name) {
        if (name === void 0) { name = "QuadraticCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._curves = [];
        return _this;
    }
    Object.defineProperty(QuadraticCurveShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuadraticCurveShape.prototype, "numCurves", {
        get: function () {
            return this._curves.length;
        },
        enumerable: true,
        configurable: true
    });
    QuadraticCurveShape.prototype.addCurve = function (curve) {
        this._curves.push(curve);
        var p1 = curve[0], cp1 = curve[1], p2 = curve[2];
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    QuadraticCurveShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._curves = [];
        return this;
    };
    QuadraticCurveShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._curves.length < 1) {
            throw new ReferenceError("QuadraticCurveShape (" + this.name + ") must have at least one Point.");
        }
        var _a = this._curves, _b = _a[0], _c = _b[0], x = _c[0], y = _c[1], _d = _b[1], x2 = _d[0], y2 = _d[1], _e = _b[2], x3 = _e[0], y3 = _e[1], curvesTo = _a.slice(1);
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.quadraticCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY);
        if (curvesTo !== undefined) {
            curvesTo.forEach(function (_a) {
                var _b = _a[1], _x2 = _b[0], _y2 = _b[1], _c = _a[2], _x3 = _c[0], _y3 = _c[1];
                return ctx.quadraticCurveTo(_x2 - _this.originX, _y2 - _this.originY, _x3 - _this.originX, _y3 - _this.originY);
            });
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    QuadraticCurveShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return QuadraticCurveShape;
}(BaseStyle_1.BaseStyle));
exports.QuadraticCurveShape = QuadraticCurveShape;
//# sourceMappingURL=QuadraticCurveShape.js.map