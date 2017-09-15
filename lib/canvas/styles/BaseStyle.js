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
var BaseShape_1 = require("../shapes/BaseShape");
var StyleManager_1 = require("./StyleManager");
var color_style_parser_1 = require("./color-style-parser");
var StyleTweenHelper_1 = require("./StyleTweenHelper");
/**
 * Draws a filled and/or stroked rectangle.
 */
var BaseStyle = (function (_super) {
    __extends(BaseStyle, _super);
    function BaseStyle(canvas, ctx, name) {
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._styleTweenHelper = new StyleTweenHelper_1.StyleTweenHelper();
        _this.styleManager = new StyleManager_1.StyleManager(_this.ctx);
        return _this;
    }
    Object.defineProperty(BaseStyle.prototype, "isVisible", {
        get: function () {
            return (this.styleManager.hasFill || this.styleManager.hasStroke) && this.ctx.globalAlpha > 0 && this._isVisible;
        },
        set: function (v) {
            this._isVisible = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseStyle.prototype, "opacity", {
        get: function () {
            return this.styleManager.opacity;
        },
        set: function (alpha) {
            this.styleManager.opacity = alpha;
        },
        enumerable: true,
        configurable: true
    });
    BaseStyle.prototype.compose = function (alpha, overlay) {
        this.styleManager.compose(alpha, overlay);
        return this;
    };
    BaseStyle.prototype.withFill = function (style, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1 && style !== undefined) {
            var vals = color_style_parser_1.parseColorStyle(style);
            var props = ["fillColorR", "fillColorG", "fillColorB", "fillColorA"];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        }
        else {
            style = typeof style === "number" ? "#" + style.toString(16) : style;
            if (typeof style === "string") {
                this._styleTweenHelper.fillColorRGBA = style;
            }
            this.styleManager.withFill(style);
        }
        return this;
    };
    BaseStyle.prototype.withStroke = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof args[2] === "number" && args[2] > 1) {
            var vals = [args[0] | 0].concat(color_style_parser_1.parseColorStyle(args[1]));
            var props = ["strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA"];
            this.tweenManager.addTween(this._styleTweenHelper, args[3], args[2], vals, props, args[4]);
        }
        else {
            var width = args[0], style = args[1], join = args[2], cap = args[3], dashOffset = args[4], miterLimit = args[5];
            if (width !== undefined) {
                this._styleTweenHelper.strokeWidth = width;
            }
            if (style !== undefined) {
                this._styleTweenHelper.strokeColorRGBA = style;
            }
            this.styleManager.withStroke(undefined, undefined, join, cap, dashOffset, miterLimit);
        }
        return this;
    };
    BaseStyle.prototype.withShadow = function (blur, color, offsetX, offsetY, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            var vals = [blur].concat(color_style_parser_1.parseColorStyle(color), [offsetX, offsetY]);
            var props = ["shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY"];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        }
        else {
            color = typeof color === "number" ? "#" + color.toString(16) : color;
            this._styleTweenHelper.shadowBlur = blur;
            this._styleTweenHelper.shadowColorRGBA = color;
            this._styleTweenHelper.shadowOffsetX = offsetX;
            this._styleTweenHelper.shadowOffsetY = offsetY;
        }
        return this;
    };
    BaseStyle.prototype.textStyle = function (font, align, baseline) {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    };
    BaseStyle.prototype.draw = function (ctxt) {
        this.styleManager.begin();
        this._styleTweenHelper.draw(this.styleManager);
        _super.prototype.draw.call(this, ctxt);
        this.styleManager.end();
    };
    BaseStyle.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.styleManager.clear();
        this._isVisible = true;
        return this;
    };
    return BaseStyle;
}(BaseShape_1.BaseShape));
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=BaseStyle.js.map