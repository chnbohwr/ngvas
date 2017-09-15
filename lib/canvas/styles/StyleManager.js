"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StyleManager = (function () {
    function StyleManager(ctx) {
        this.ctx = ctx;
        this.ctxValues = {};
    }
    Object.defineProperty(StyleManager.prototype, "hasFill", {
        get: function () {
            return !!this.ctxValues.fillStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleManager.prototype, "hasStroke", {
        get: function () {
            return !!this.ctxValues.lineWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleManager.prototype, "lineWidth", {
        get: function () {
            return this.ctxValues.lineWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleManager.prototype, "opacity", {
        get: function () {
            return this.ctxValues.globalAlpha;
        },
        set: function (alpha) {
            this.ctxValues.globalAlpha = alpha;
        },
        enumerable: true,
        configurable: true
    });
    StyleManager.prototype.compose = function (alpha, overlay) {
        this.ctxValues.globalAlpha = undefinedOr(alpha, this.ctxValues.globalAlpha);
        this.ctxValues.globalCompositeOperation = undefinedOr(overlay, this.ctxValues.globalCompositeOperation);
        return this;
    };
    StyleManager.prototype.withFill = function (style) {
        this.ctxValues.fillStyle = undefinedOr(style, this.ctxValues.fillStyle);
        return this;
    };
    StyleManager.prototype.withStroke = function (width, style, join, cap, dashOffset, miterLimit) {
        this.ctxValues.lineCap = undefinedOr(cap, this.ctxValues.lineCap);
        this.ctxValues.lineDashOffset = undefinedOr(dashOffset, this.ctxValues.lineDashOffset);
        this.ctxValues.lineJoin = undefinedOr(join, this.ctxValues.lineJoin);
        this.ctxValues.lineWidth = undefinedOr(width, this.ctxValues.lineWidth);
        this.ctxValues.strokeStyle = undefinedOr(style, this.ctxValues.strokeStyle);
        this.ctxValues.miterLimit = undefinedOr(miterLimit, this.ctxValues.miterLimit);
        return this;
    };
    StyleManager.prototype.withShadow = function (blur, color, offsetX, offsetY) {
        this.ctxValues.shadowBlur = undefinedOr(blur, this.ctxValues.shadowBlur);
        this.ctxValues.shadowColor = undefinedOr(color, this.ctxValues.shadowColor);
        this.ctxValues.shadowOffsetX = undefinedOr(offsetX, this.ctxValues.shadowOffsetX);
        this.ctxValues.shadowOffsetY = undefinedOr(offsetY, this.ctxValues.shadowOffsetY);
        return this;
    };
    StyleManager.prototype.withText = function () {
        throw new Error("This method is not supported in StyleManager.");
    };
    StyleManager.prototype.textStyle = function (font, align, baseline) {
        this.ctxValues.font = undefinedOr(font, this.ctxValues.font);
        this.ctxValues.textAlign = undefinedOr(align, this.ctxValues.textAlign);
        this.ctxValues.textBaseline = undefinedOr(baseline, this.ctxValues.textBaseline);
        return this;
    };
    StyleManager.prototype.begin = function () {
        this.ctx.save();
        for (var p in this.ctxValues) {
            if (this.ctxValues.hasOwnProperty(p)) {
                this.ctx[p] = this.ctxValues[p];
            }
        }
    };
    StyleManager.prototype.end = function () {
        this.ctx.restore();
    };
    StyleManager.prototype.clear = function () {
        this.ctxValues = {};
    };
    return StyleManager;
}());
exports.StyleManager = StyleManager;
function undefinedOr(arg, ctxProp) {
    return arg !== undefined ? arg : ctxProp;
}
//# sourceMappingURL=StyleManager.js.map