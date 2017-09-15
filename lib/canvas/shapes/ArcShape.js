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
var DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * Draws a filled and/or stroked arc.
 */
var ArcShape = (function (_super) {
    __extends(ArcShape, _super);
    function ArcShape(canvas, ctx, name) {
        if (name === void 0) { name = "Arc_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._angleDegree = 180;
        _this._connectToCenter = false;
        return _this;
    }
    Object.defineProperty(ArcShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.LINE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcShape.prototype, "radius", {
        get: function () {
            return this.width / 2;
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
    Object.defineProperty(ArcShape.prototype, "angle", {
        get: function () {
            return this._angleDegree;
        },
        set: function (deg) {
            this._angleDegree = Math.max(0, Math.min(360, deg));
        },
        enumerable: true,
        configurable: true
    });
    ArcShape.prototype.withRadius = function (r, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback, 5);
        }
        else {
            this.radius = r;
        }
        return this;
    };
    ArcShape.prototype.withAngle = function (deg, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [deg], ["angle"], callback, 10);
        }
        else {
            this.angle = deg;
        }
        return this;
    };
    ArcShape.prototype.connectToCenter = function (c) {
        this._connectToCenter = c;
        return this;
    };
    ArcShape.prototype.traceShape = function (ctx) {
        ctx.beginPath();
        if (this._connectToCenter) {
            ctx.moveTo(0 - this.originX, 0 - this.originY);
        }
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, DEG_TO_ANGLE * this._angleDegree);
        if (this._connectToCenter) {
            ctx.lineTo(0 - this.originX, 0 - this.originY);
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    ArcShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._angleDegree = 180;
        this._connectToCenter = false;
        return this;
    };
    ArcShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return ArcShape;
}(BaseStyle_1.BaseStyle));
exports.ArcShape = ArcShape;
//# sourceMappingURL=ArcShape.js.map