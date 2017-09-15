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
/**
 * Draws a filled and/or stroked polygon.
 */
var PolyShape = (function (_super) {
    __extends(PolyShape, _super);
    function PolyShape(canvas, ctx, name) {
        if (name === void 0) { name = "PolyShape_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._sidesCollection = [];
        return _this;
    }
    Object.defineProperty(PolyShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolyShape.prototype, "width", {
        get: function () { return this.boundary.width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolyShape.prototype, "height", {
        get: function () { return this.boundary.height; },
        enumerable: true,
        configurable: true
    });
    PolyShape.prototype.addLine = function (line) {
        this._sidesCollection.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    PolyShape.prototype.addBezier = function (curve) {
        this._sidesCollection.push(curve);
        var p1 = curve[0], cp1 = curve[1], cp2 = curve[2], p2 = curve[3];
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    PolyShape.prototype.addQuadratic = function (curve) {
        this._sidesCollection.push(curve);
        var p1 = curve[0], cp1 = curve[1], p2 = curve[2];
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    PolyShape.prototype.clear = function () {
        this.boundary.reset();
        this._sidesCollection = [];
        return this;
    };
    PolyShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._sidesCollection.length < 2) {
            throw new ReferenceError("PolyShape (" + this.name + ") must have at least two sides.");
        }
        var _a = this._sidesCollection[0][0], x = _a[0], y = _a[1];
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        this._sidesCollection.forEach(function (s) {
            // Line
            if (s.length === 2) {
                var _a = s[1], x2 = _a[0], y2 = _a[1];
                ctx.lineTo(x2 - _this.originX, y2 - _this.originY);
                // Quadratic
            }
            else if (s.length === 3) {
                var _b = s.slice(0, 3), _c = _b[1], x2 = _c[0], y2 = _c[1], _d = _b[2], x3 = _d[0], y3 = _d[1];
                ctx.quadraticCurveTo(x2 - _this.originX, y2 - _this.originY, x3 - _this.originX, y3 - _this.originY);
                // Bezier
            }
            else if (s.length === 4) {
                var _e = s.slice(0, 4), _f = _e[1], x2 = _f[0], y2 = _f[1], _g = _e[2], x3 = _g[0], y3 = _g[1], _h = _e[3], x4 = _h[0], y4 = _h[1];
                ctx.bezierCurveTo(x2 - _this.originX, y2 - _this.originY, x3 - _this.originX, y3 - _this.originY, x4 - _this.originX, y4 - _this.originY);
            }
        });
        ctx.closePath();
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    PolyShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return PolyShape;
}(BaseStyle_1.BaseStyle));
exports.PolyShape = PolyShape;
//# sourceMappingURL=PolyShape.js.map