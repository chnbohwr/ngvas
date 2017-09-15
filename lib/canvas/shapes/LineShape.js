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
var LineShape = (function (_super) {
    __extends(LineShape, _super);
    function LineShape(canvas, ctx, name) {
        if (name === void 0) { name = "Line_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._linePoints = [];
        return _this;
    }
    Object.defineProperty(LineShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.LINE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "width", {
        set: function (v) { throw new ReferenceError("LineShape width cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "height", {
        set: function (v) { throw new ReferenceError("LineShape height cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    LineShape.prototype.addLine = function (line) {
        this._linePoints.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    LineShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._linePoints = [];
        return this;
    };
    LineShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._linePoints.length < 1) {
            throw new ReferenceError("LineShape (" + this.name + ") must have at least one line.");
        }
        ctx.beginPath();
        this._linePoints.forEach(function (_a, i) {
            var _b = _a[0], x = _b[0], y = _b[1], _c = _a[1], x2 = _c[0], y2 = _c[1];
            if (i === 0) {
                ctx.moveTo(x - _this.originX, y - _this.originY);
            }
            ctx.lineTo(x2 - _this.originX, y2 - _this.originY);
        });
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    LineShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return LineShape;
}(BaseStyle_1.BaseStyle));
exports.LineShape = LineShape;
//# sourceMappingURL=LineShape.js.map