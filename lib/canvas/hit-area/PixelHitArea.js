"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * Pixel-accurate Hit Area class.
 */
var PixelHitArea = (function () {
    /**
     * Creates an instance of class.
     */
    function PixelHitArea(width, height) {
        // private shape: T;
        this.canvas = null;
        this.ctx = null;
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
    }
    /**
     * Calculates if the x, y point is within the hit area.
     */
    PixelHitArea.prototype.isHit = function (x, y, globalCtx, target) {
        if (this.canvas === null || this.ctx === null) {
            throw new ReferenceError("PixelHitArea was not initialized correctly.");
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.setTransform(globalCtx.scaleX, globalCtx.skewX, globalCtx.skewY, globalCtx.scaleY, globalCtx.moveX, globalCtx.moveY);
        this.ctx.rotate(globalCtx.rotate * DEG_TO_ANGLE);
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "black";
        target.traceShape(this.ctx);
        this.ctx.rotate(-(globalCtx.rotate * DEG_TO_ANGLE));
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.restore();
        return this.ctx.getImageData(x, y, 1, 1).data[3] > 0;
    };
    /**
     * Cleans up the instance.
     */
    PixelHitArea.prototype.destroy = function () {
        this.canvas = null;
        this.ctx = null;
    };
    return PixelHitArea;
}());
exports.PixelHitArea = PixelHitArea;
//# sourceMappingURL=PixelHitArea.js.map