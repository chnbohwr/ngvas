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
var Boundary_1 = require("../Boundary");
/**
 * Draws a stroked line.
 */
var BezierCurveShape = (function (_super) {
    __extends(BezierCurveShape, _super);
    function BezierCurveShape(canvas, ctx, name) {
        if (name === void 0) { name = "BezierCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._curves = [];
        _this._boundary = new Boundary_1.Boundary();
        return _this;
    }
    Object.defineProperty(BezierCurveShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.LINE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierCurveShape.prototype, "width", {
        get: function () { return this._boundary.width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierCurveShape.prototype, "height", {
        get: function () { return this._boundary.height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierCurveShape.prototype, "numCurves", {
        get: function () {
            return this._curves.length;
        },
        enumerable: true,
        configurable: true
    });
    BezierCurveShape.prototype.addCurve = function (curve) {
        this._curves.push(curve);
        var p1 = curve[0], cp1 = curve[1], cp2 = curve[2], p2 = curve[3];
        this._boundary.setPoint(p1);
        this._boundary.setPoint(p2);
        this._boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    BezierCurveShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._curves = [];
        return this;
    };
    BezierCurveShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._curves.length < 1) {
            throw new ReferenceError("BezierCurveShape (" + this.name + ") must have at least one Point.");
        }
        var _a = this._curves, _b = _a[0], _c = _b[0], x = _c[0], y = _c[1], _d = _b[1], x2 = _d[0], y2 = _d[1], _e = _b[2], x3 = _e[0], y3 = _e[1], _f = _b[3], x4 = _f[0], y4 = _f[1], curvesTo = _a.slice(1);
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.bezierCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY, x4 - this.originX, y4 - this.originY);
        if (curvesTo !== undefined) {
            curvesTo.forEach(function (_a) {
                var _b = _a[1], _x2 = _b[0], _y2 = _b[1], _c = _a[2], _x3 = _c[0], _y3 = _c[1], _d = _a[3], _x4 = _d[0], _y4 = _d[1];
                return ctx.bezierCurveTo(_x2 - _this.originX, _y2 - _this.originY, _x3 - _this.originX, _y3 - _this.originY, _x4 - _this.originX, _y4 - _this.originY);
            });
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    BezierCurveShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return BezierCurveShape;
}(BaseStyle_1.BaseStyle));
exports.BezierCurveShape = BezierCurveShape;
//# sourceMappingURL=BezierCurveShape.js.map