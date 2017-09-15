"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_style_parser_1 = require("./color-style-parser");
/**
 * Class for StyleTweenHelper.
 */
var StyleTweenHelper = (function () {
    function StyleTweenHelper() {
        this._isFillDirty = false;
        this._fillColorRGBA = [0, 0, 0, 1];
        this._isStrokeDirty = false;
        this._strokeWidth = 0;
        this._strokeColorRGBA = [0, 0, 0, 1];
        this._isShadowDirty = false;
        this._shadowBlur = 0;
        this._shadowOffset = [0, 0];
        this._shadowColorRGBA = [0, 0, 0, 1];
    }
    StyleTweenHelper.prototype.draw = function (styleManager) {
        if (this._isFillDirty) {
            styleManager.withFill(color_style_parser_1.toRgbaString(this._fillColorRGBA));
        }
        if (this._isStrokeDirty) {
            styleManager.withStroke(this._strokeWidth, color_style_parser_1.toRgbaString(this._strokeColorRGBA));
        }
        if (this._isShadowDirty) {
            styleManager.withShadow(this._shadowBlur, color_style_parser_1.toRgbaString(this._shadowColorRGBA), this._shadowOffset[0], this._shadowOffset[1]);
        }
        this._isFillDirty = false;
        this._isStrokeDirty = false;
        this._isShadowDirty = false;
    };
    Object.defineProperty(StyleTweenHelper.prototype, "fillColorRGBA", {
        get: function () {
            return color_style_parser_1.toRgbaString(this._fillColorRGBA);
        },
        // "fillColorR", "fillColorG", "fillColorB", "fillColorA"
        set: function (rgba) {
            this._fillColorRGBA = color_style_parser_1.parseColorStyle(rgba);
            this._isFillDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "fillColorR", {
        get: function () {
            return this._fillColorRGBA[0];
        },
        set: function (r) {
            this._fillColorRGBA[0] = r | 0;
            this._isFillDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "fillColorG", {
        get: function () {
            return this._fillColorRGBA[1];
        },
        set: function (g) {
            this._fillColorRGBA[1] = g | 0;
            this._isFillDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "fillColorB", {
        get: function () {
            return this._fillColorRGBA[2];
        },
        set: function (b) {
            this._fillColorRGBA[2] = b | 0;
            this._isFillDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "fillColorA", {
        get: function () {
            return this._fillColorRGBA[3];
        },
        set: function (a) {
            this._fillColorRGBA[3] = a;
            this._isFillDirty = true;
            // this.styleManager.withFill(toRgbaString(this._fillColorRGBA));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        // "strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA"
        set: function (w) {
            this._strokeWidth = w;
            this._isStrokeDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "strokeColorRGBA", {
        get: function () {
            return color_style_parser_1.toRgbaString(this._strokeColorRGBA);
        },
        set: function (rgba) {
            this._strokeColorRGBA = color_style_parser_1.parseColorStyle(rgba);
            this._isStrokeDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "strokeColorR", {
        get: function () {
            return this._strokeColorRGBA[0];
        },
        set: function (r) {
            this._strokeColorRGBA[0] = r | 0;
            this._isStrokeDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "strokeColorG", {
        get: function () {
            return this._strokeColorRGBA[1];
        },
        set: function (g) {
            this._strokeColorRGBA[1] = g | 0;
            this._isStrokeDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "strokeColorB", {
        get: function () {
            return this._strokeColorRGBA[2];
        },
        set: function (b) {
            this._strokeColorRGBA[2] = b | 0;
            this._isStrokeDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "strokeColorA", {
        get: function () {
            return this._strokeColorRGBA[3];
        },
        set: function (a) {
            this._strokeColorRGBA[3] = a;
            this._isStrokeDirty = true;
            // this.styleManager.withStroke(this._strokeWidth, toRgbaString(this._strokeColorRGBA));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowBlur", {
        get: function () {
            return this._shadowBlur;
        },
        // "shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY"
        set: function (b) {
            this._shadowBlur = Math.max(0, b);
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowOffsetX", {
        get: function () {
            return this._shadowOffset[0];
        },
        set: function (x) {
            this._shadowOffset[0] = x;
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowOffsetY", {
        get: function () {
            return this._shadowOffset[1];
        },
        set: function (y) {
            this._shadowOffset[1] = y;
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowColorRGBA", {
        get: function () {
            return color_style_parser_1.toRgbaString(this._shadowColorRGBA);
        },
        set: function (rgba) {
            this._shadowColorRGBA = color_style_parser_1.parseColorStyle(rgba);
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowColorR", {
        get: function () {
            return this._shadowColorRGBA[0];
        },
        set: function (r) {
            this._shadowColorRGBA[0] = r | 0;
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowColorG", {
        get: function () {
            return this._shadowColorRGBA[1];
        },
        set: function (g) {
            this._shadowColorRGBA[1] = g | 0;
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowColorB", {
        get: function () {
            return this._shadowColorRGBA[2];
        },
        set: function (b) {
            this._shadowColorRGBA[2] = b | 0;
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleTweenHelper.prototype, "shadowColorA", {
        get: function () {
            return this._shadowColorRGBA[3];
        },
        set: function (a) {
            this._shadowColorRGBA[3] = a;
            this._isShadowDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    return StyleTweenHelper;
}());
exports.StyleTweenHelper = StyleTweenHelper;
//# sourceMappingURL=StyleTweenHelper.js.map