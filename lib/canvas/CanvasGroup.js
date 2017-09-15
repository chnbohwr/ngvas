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
var Group_1 = require("./Group");
var canvasCtxt = Object.freeze({
    scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, moveX: 0, moveY: 0, rotate: 0,
});
function createOffscreenCanvas(canvas) {
    var c = document.createElement("canvas");
    c.width = canvas.width;
    c.height = canvas.height;
    return c;
}
var CanvasGroup = (function (_super) {
    __extends(CanvasGroup, _super);
    function CanvasGroup(canvas, offscreenCanvas, isActive) {
        if (offscreenCanvas === void 0) { offscreenCanvas = createOffscreenCanvas(canvas); }
        if (isActive === void 0) { isActive = false; }
        var _this = 
        // as any disables null check.
        _super.call(this, canvas, offscreenCanvas.getContext("2d"), canvas.id || "CanvasGroup") || this;
        _this._reqAniFrameId = 0;
        _this.__isActive = isActive;
        _this.width = canvas.width;
        _this.height = canvas.height;
        // Async so other shapes can be added before first draw.
        _this._reqAniFrameId = window.requestAnimationFrame(function () { return _this.draw(canvasCtxt); });
        return _this;
    }
    CanvasGroup.prototype.redraw = function () {
        this.draw(canvasCtxt);
    };
    Object.defineProperty(CanvasGroup.prototype, "context", {
        get: function () {
            return this.ctx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasGroup.prototype, "isActive", {
        get: function () {
            return this.__isActive;
        },
        set: function (v) {
            var _this = this;
            if (this.__isActive === false && v === true) {
                this._reqAniFrameId = window.requestAnimationFrame(function () { return _this.draw(canvasCtxt); });
            }
            else {
                window.cancelAnimationFrame(this._reqAniFrameId);
                this._reqAniFrameId = 0;
            }
            this.__isActive = v;
        },
        enumerable: true,
        configurable: true
    });
    CanvasGroup.prototype.draw = function (ctxt) {
        var _this = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        _super.prototype.draw.call(this, ctxt);
        this.canvas.getContext("2d").putImageData(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height), 0, 0);
        if (this.isActive) {
            this._reqAniFrameId = window.requestAnimationFrame(function () { return _this.draw(canvasCtxt); });
        }
    };
    CanvasGroup.prototype.isHit = function () {
        return true;
    };
    return CanvasGroup;
}(Group_1.Group));
exports.CanvasGroup = CanvasGroup;
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function () {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"]
            || window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}());
//# sourceMappingURL=CanvasGroup.js.map