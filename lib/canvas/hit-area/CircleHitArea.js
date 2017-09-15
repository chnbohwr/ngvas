"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CircleHitArea = (function () {
    function CircleHitArea(width, height, offset) {
        if (offset === void 0) { offset = 1; }
        this.width = width;
        this.height = height;
        this.offset = offset;
        console.log(this.width, this.height, this.offset);
    }
    CircleHitArea.prototype.isHit = function (x, y, globalCtx, target) {
        console.log(x, y, globalCtx, target);
        return false;
    };
    CircleHitArea.prototype.destroy = function () {
        /* Empty */
    };
    return CircleHitArea;
}());
exports.CircleHitArea = CircleHitArea;
//# sourceMappingURL=CircleHitArea.js.map