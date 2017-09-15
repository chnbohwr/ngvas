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
var ImageShape = (function (_super) {
    __extends(ImageShape, _super);
    function ImageShape(canvas, ctx, name) {
        if (name === void 0) { name = "Image_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        return _super.call(this, canvas, ctx, name) || this;
    }
    Object.defineProperty(ImageShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.IMAGE; },
        enumerable: true,
        configurable: true
    });
    ImageShape.prototype.withImage = function (img, callback) {
        var _this = this;
        this._image = new Image();
        this._image.src = img;
        if (callback !== undefined) {
            this._image.addEventListener("load", function () { return callback(_this); });
        }
        return this;
    };
    ImageShape.prototype.getImage = function () {
        return this._image;
    };
    ImageShape.prototype.traceShape = function (ctx) {
        ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
    };
    ImageShape.prototype.customDraw = function () {
        this.ctx.drawImage(this._image, 0 - this.originX, 0 - this.originY, this.width, this.height);
    };
    return ImageShape;
}(BaseStyle_1.BaseStyle));
exports.ImageShape = ImageShape;
//# sourceMappingURL=ImageShape.js.map