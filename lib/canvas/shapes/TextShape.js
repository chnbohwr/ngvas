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
 * Draws a filled and/or stroked line of text.
 */
var TextShape = (function (_super) {
    __extends(TextShape, _super);
    function TextShape(canvas, ctx, name) {
        if (name === void 0) { name = "Text_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._text = "";
        return _this;
    }
    Object.defineProperty(TextShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.TEXT; },
        enumerable: true,
        configurable: true
    });
    TextShape.prototype.withText = function (text, maxWidth) {
        this._maxWidth = maxWidth;
        this.text = text;
        return this;
    };
    Object.defineProperty(TextShape.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            this.styleManager.begin();
            this.width = this._maxWidth || this.ctx.measureText(this._text).width;
            this.styleManager.end();
        },
        enumerable: true,
        configurable: true
    });
    TextShape.prototype.textStyle = function (font, align, baseline) {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    };
    TextShape.prototype.traceShape = function (ctx) {
        ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
    };
    TextShape.prototype.customDraw = function () {
        if (this.styleManager.hasFill) {
            this.ctx.fillText(this.text, 0 - this.originX, 0 - this.originY, this._maxWidth);
        }
        if (this.styleManager.hasStroke) {
            this.ctx.strokeText(this.text, 0 - this.originX, 0 - this.originY, this._maxWidth);
        }
    };
    return TextShape;
}(BaseStyle_1.BaseStyle));
exports.TextShape = TextShape;
//# sourceMappingURL=TextShape.js.map