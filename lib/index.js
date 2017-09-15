"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PixelHitArea_1 = require("./canvas/hit-area/PixelHitArea");
var BaseStyle_1 = require("./canvas/styles/BaseStyle");
var _tweenEasings = require("./canvas/tweens/easing");
var CanvasGroup_1 = require("./canvas/CanvasGroup");
var ArcShape_1 = require("./canvas/shapes/ArcShape");
var BaseShape_1 = require("./canvas/shapes/BaseShape");
var BezierCurveShape_1 = require("./canvas/shapes/BezierCurveShape");
var CircleShape_1 = require("./canvas/shapes/CircleShape");
var ImageShape_1 = require("./canvas/shapes/ImageShape");
var LineShape_1 = require("./canvas/shapes/LineShape");
var PolyShape_1 = require("./canvas/shapes/PolyShape");
var QuadraticCurveShape_1 = require("./canvas/shapes/QuadraticCurveShape");
var RectShape_1 = require("./canvas/shapes/RectShape");
var TextShape_1 = require("./canvas/shapes/TextShape");
var ngvas_module_1 = require("./ngvas.module");
exports.NgvasModule = ngvas_module_1.NgvasModule;
var hitAreas;
(function (hitAreas) {
    hitAreas.PixelHitArea = PixelHitArea_1.PixelHitArea;
})(hitAreas = exports.hitAreas || (exports.hitAreas = {}));
var tweens;
(function (tweens) {
    tweens.easings = _tweenEasings;
})(tweens = exports.tweens || (exports.tweens = {}));
var shapes;
(function (shapes) {
    shapes.BaseShape = BaseShape_1.BaseShape;
    shapes.BaseStyle = BaseStyle_1.BaseStyle;
    shapes.CanvasGroup = CanvasGroup_1.CanvasGroup;
    shapes.ArcShape = ArcShape_1.ArcShape;
    shapes.BezierCurveShape = BezierCurveShape_1.BezierCurveShape;
    shapes.CircleShape = CircleShape_1.CircleShape;
    shapes.ImageShape = ImageShape_1.ImageShape;
    shapes.LineShape = LineShape_1.LineShape;
    shapes.PolyShape = PolyShape_1.PolyShape;
    shapes.QuadraticCurveShape = QuadraticCurveShape_1.QuadraticCurveShape;
    shapes.RectShape = RectShape_1.RectShape;
    shapes.TextShape = TextShape_1.TextShape;
})(shapes = exports.shapes || (exports.shapes = {}));
//# sourceMappingURL=index.js.map