"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group_1 = require("./Group");
var CanvasGroup_1 = require("./CanvasGroup");
var _1 = require("./shapes/");
var _hitAreas = require("./hit-area/");
var _tweens = require("./tweens/");
exports.hitAreas = _hitAreas;
exports.tweens = _tweens;
function init(canvas, isActive) {
    if (isActive === void 0) { isActive = false; }
    var cg = new CanvasGroup_1.CanvasGroup(canvas, undefined, isActive);
    return {
        getCanvasGroup: function () {
            return cg;
        },
        addChild: function () {
            var shape = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                shape[_i] = arguments[_i];
            }
            shape.forEach(function (s) { return cg.addChild(s); });
        },
        Group: function (name) {
            if (name === void 0) { name = "Group_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
            return new Group_1.Group(canvas, cg.context, name);
        },
        Arc: function (name) {
            return new _1.ArcShape(canvas, cg.context, name);
        },
        BezierCurve: function (name) {
            return new _1.BezierCurveShape(canvas, cg.context, name);
        },
        Circle: function (name) {
            return new _1.CircleShape(canvas, cg.context, name);
        },
        Poly: function (name) {
            return new _1.PolyShape(canvas, cg.context, name);
        },
        Image: function (name) {
            return new _1.ImageShape(canvas, cg.context, name);
        },
        Line: function (name) {
            return new _1.LineShape(canvas, cg.context, name);
        },
        Rectangle: function (name) {
            return new _1.RectShape(canvas, cg.context, name);
        },
        Text: function (name) {
            return new _1.TextShape(canvas, cg.context, name);
        },
        QuadraticCurve: function (name) {
            return new _1.QuadraticCurveShape(canvas, cg.context, name);
        },
    };
}
exports.init = init;
//# sourceMappingURL=index.js.map