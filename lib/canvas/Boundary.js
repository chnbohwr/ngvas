"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Boundary = (function () {
    function Boundary() {
        this._boundary = [[0, 0], [0, 0]];
    }
    Boundary.prototype.setPoint = function (point) {
        var _a = this._boundary, _b = _a[0], x1 = _b[0], y1 = _b[1], _c = _a[1], x2 = _c[0], y2 = _c[1];
        this._boundary = [
            [Math.min(point[0], x1), Math.min(point[1], y1)],
            [Math.max(point[0], x2), Math.max(point[1], y2)],
        ];
    };
    Object.defineProperty(Boundary.prototype, "border", {
        get: function () {
            var _a = this._boundary, _b = _a[0], x1 = _b[0], y1 = _b[1], _c = _a[1], x2 = _c[0], y2 = _c[1];
            return [[x1, y1], [x2, y2]];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Boundary.prototype, "width", {
        get: function () {
            var _a = this._boundary, x1 = _a[0][0], x2 = _a[1][0];
            return x2 - x1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Boundary.prototype, "height", {
        get: function () {
            var _a = this._boundary, _b = _a[0], y1 = _b[1], _c = _a[1], y2 = _c[1];
            return y2 - y1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Boundary.prototype, "center", {
        get: function () {
            var _a = this._boundary, _b = _a[0], x1 = _b[0], y1 = _b[1], _c = _a[1], x2 = _c[0], y2 = _c[1];
            return [(x2 + x1) / 2, (y2 + y1) / 2];
        },
        enumerable: true,
        configurable: true
    });
    Boundary.prototype.reset = function () {
        this._boundary = [[0, 0], [0, 0]];
    };
    Boundary.prototype.clone = function () {
        var b = new Boundary();
        var _a = this._boundary, _b = _a[0], x1 = _b[0], y1 = _b[1], _c = _a[1], x2 = _c[0], y2 = _c[1];
        b._boundary = [[x1, y1], [x2, y2]];
        return b;
    };
    return Boundary;
}());
exports.Boundary = Boundary;
//# sourceMappingURL=Boundary.js.map