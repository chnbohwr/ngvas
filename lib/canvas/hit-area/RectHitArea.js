"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RectHitArea = (function () {
    function RectHitArea(width, height, offset) {
        if (offset === void 0) { offset = 1; }
        this.width = width;
        this.height = height;
        this.offset = offset;
        console.log(this.width, this.height, this.offset);
    }
    RectHitArea.prototype.isHit = function (x, y, globalCtx, target) {
        console.log(x, y, globalCtx, target);
        return false;
    };
    RectHitArea.prototype.destroy = function () {
        /* Empty */
    };
    return RectHitArea;
}());
exports.RectHitArea = RectHitArea;
//# sourceMappingURL=RectHitArea.js.map