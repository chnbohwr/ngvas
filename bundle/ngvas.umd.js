(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngvas"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngvas"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_35__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseShape_1 = __webpack_require__(7);
var StyleManager_1 = __webpack_require__(21);
var color_style_parser_1 = __webpack_require__(18);
var StyleTweenHelper_1 = __webpack_require__(22);
/**
 * Draws a filled and/or stroked rectangle.
 */
var BaseStyle = (function (_super) {
    __extends(BaseStyle, _super);
    function BaseStyle(canvas, ctx, name) {
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._styleTweenHelper = new StyleTweenHelper_1.StyleTweenHelper();
        _this.styleManager = new StyleManager_1.StyleManager(_this.ctx);
        return _this;
    }
    Object.defineProperty(BaseStyle.prototype, "isVisible", {
        get: function () {
            return (this.styleManager.hasFill || this.styleManager.hasStroke) && this.ctx.globalAlpha > 0 && this._isVisible;
        },
        set: function (v) {
            this._isVisible = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseStyle.prototype, "opacity", {
        get: function () {
            return this.styleManager.opacity;
        },
        set: function (alpha) {
            this.styleManager.opacity = alpha;
        },
        enumerable: true,
        configurable: true
    });
    BaseStyle.prototype.compose = function (alpha, overlay) {
        this.styleManager.compose(alpha, overlay);
        return this;
    };
    BaseStyle.prototype.withFill = function (style, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1 && style !== undefined) {
            var vals = color_style_parser_1.parseColorStyle(style);
            var props = ["fillColorR", "fillColorG", "fillColorB", "fillColorA"];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        }
        else {
            style = typeof style === "number" ? "#" + style.toString(16) : style;
            if (typeof style === "string") {
                this._styleTweenHelper.fillColorRGBA = style;
            }
            this.styleManager.withFill(style);
        }
        return this;
    };
    BaseStyle.prototype.withStroke = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof args[2] === "number" && args[2] > 1) {
            var vals = [args[0] | 0].concat(color_style_parser_1.parseColorStyle(args[1]));
            var props = ["strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA"];
            this.tweenManager.addTween(this._styleTweenHelper, args[3], args[2], vals, props, args[4]);
        }
        else {
            var width = args[0], style = args[1], join = args[2], cap = args[3], dashOffset = args[4], miterLimit = args[5];
            if (width !== undefined) {
                this._styleTweenHelper.strokeWidth = width;
            }
            if (style !== undefined) {
                this._styleTweenHelper.strokeColorRGBA = style;
            }
            this.styleManager.withStroke(undefined, undefined, join, cap, dashOffset, miterLimit);
        }
        return this;
    };
    BaseStyle.prototype.withShadow = function (blur, color, offsetX, offsetY, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            var vals = [blur].concat(color_style_parser_1.parseColorStyle(color), [offsetX, offsetY]);
            var props = ["shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY"];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        }
        else {
            color = typeof color === "number" ? "#" + color.toString(16) : color;
            this._styleTweenHelper.shadowBlur = blur;
            this._styleTweenHelper.shadowColorRGBA = color;
            this._styleTweenHelper.shadowOffsetX = offsetX;
            this._styleTweenHelper.shadowOffsetY = offsetY;
        }
        return this;
    };
    BaseStyle.prototype.textStyle = function (font, align, baseline) {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    };
    BaseStyle.prototype.draw = function (ctxt) {
        this.styleManager.begin();
        this._styleTweenHelper.draw(this.styleManager);
        _super.prototype.draw.call(this, ctxt);
        this.styleManager.end();
    };
    BaseStyle.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.styleManager.clear();
        this._isVisible = true;
        return this;
    };
    return BaseStyle;
}(BaseShape_1.BaseShape));
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=BaseStyle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["EMPTY"] = 0] = "EMPTY";
    ShapeType[ShapeType["GROUP"] = 1] = "GROUP";
    ShapeType[ShapeType["IMAGE"] = 2] = "IMAGE";
    ShapeType[ShapeType["LINE"] = 3] = "LINE";
    ShapeType[ShapeType["SHAPE"] = 4] = "SHAPE";
    ShapeType[ShapeType["TEXT"] = 5] = "TEXT";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * The base class for all shape components.
 */
var NgvasBaseComponent = (function () {
    /**
     * Base constructor for the base component.
     */
    function NgvasBaseComponent(Clazz) {
        this.Clazz = Clazz;
        this._delayedSetters = [];
        this.shapeOut = new core_1.EventEmitter();
        /////////////////////////////////////////////
        // MOUSE EVENTS
        this.clickEvent = new core_1.EventEmitter();
        this.dblclickEvent = new core_1.EventEmitter();
        this.wheelEvent = new core_1.EventEmitter();
        this.mouseenterEvent = new core_1.EventEmitter();
        this.mouseleaveEvent = new core_1.EventEmitter();
    }
    Object.defineProperty(NgvasBaseComponent.prototype, "active", {
        set: function (a) { this.execOrDelay(function (s) { return s.isActive = a; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "visible", {
        set: function (v) { this.execOrDelay(function (s) { return s.isVisible = v; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "x", {
        set: function (x) { this.execOrDelay(function (s) { return s.x = x; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "y", {
        set: function (y) { this.execOrDelay(function (s) { return s.y = y; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "origin", {
        set: function (xy) {
            if (xy === "center") {
                this.execOrDelay(function (s) { return s.originToCenter = true; });
            }
            else {
                this.execOrDelay(function (s) {
                    s.originToCenter = false;
                    s.originX = xy[0] || 0;
                    s.originY = xy[1] || 0;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "width", {
        set: function (w) { this.execOrDelay(function (s) { return s.width = w; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "height", {
        set: function (h) { this.execOrDelay(function (s) { return s.height = h; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "rotation", {
        set: function (r) { this.execOrDelay(function (s) { return s.rotation = r; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "scaleX", {
        set: function (x) { this.execOrDelay(function (s) { return s.scaleX = x; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "scaleY", {
        set: function (y) { this.execOrDelay(function (s) { return s.scaleY = y; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "skewX", {
        set: function (x) { this.execOrDelay(function (s) { return s.skewX = x; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "skewY", {
        set: function (y) { this.execOrDelay(function (s) { return s.skewY = y; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasBaseComponent.prototype, "scale", {
        /////////////////////////////////////////////
        // TWEENER INPUTS
        set: function (v) {
            if (typeof v[0] === "number") {
                var _a = v, x_1 = _a[0], y_1 = _a[1];
                this.execOrDelay(function (s) { return s.scale(x_1, y_1); });
            }
            else if (Array.isArray(v[0])) {
                var _b = v, _c = _b[0], x_2 = _c[0], y_2 = _c[1], duration_1 = _b[1], tween_1 = _b[2], callback_1 = _b[3];
                this.execOrDelay(function (s) { return s.scale(x_2, y_2, duration_1, tween_1, callback_1); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "size", {
        set: function (v) {
            if (typeof v[0] === "number") {
                var _a = v, w_1 = _a[0], h_1 = _a[1];
                this.execOrDelay(function (s) { return s.resize(w_1, h_1); });
            }
            else if (Array.isArray(v[0])) {
                var _b = v, _c = _b[0], w_2 = _c[0], h_2 = _c[1], duration_2 = _b[1], tween_2 = _b[2], callback_2 = _b[3];
                this.execOrDelay(function (s) { return s.resize(w_2, h_2, duration_2, tween_2, callback_2); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "skew", {
        set: function (v) {
            if (typeof v[0] === "number") {
                var _a = v, x_3 = _a[0], y_3 = _a[1];
                this.execOrDelay(function (s) { return s.skew(x_3, y_3); });
            }
            else if (Array.isArray(v[0])) {
                var _b = v, _c = _b[0], x_4 = _c[0], y_4 = _c[1], duration_3 = _b[1], tween_3 = _b[2], callback_3 = _b[3];
                this.execOrDelay(function (s) { return s.skew(x_4, y_4, duration_3, tween_3, callback_3); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "rotate", {
        set: function (v) {
            if (typeof v === "number") {
                var r_1 = v;
                this.execOrDelay(function (s) { return s.rotate(r_1); });
            }
            else if (typeof v[0] === "number") {
                var _a = v, r_2 = _a[0], duration_4 = _a[1], tween_4 = _a[2], callback_4 = _a[3];
                this.execOrDelay(function (s) { return s.rotate(r_2, duration_4, tween_4, callback_4); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "translate", {
        set: function (v) {
            if (typeof v[0] === "number") {
                var _a = v, x_5 = _a[0], y_5 = _a[1];
                this.execOrDelay(function (s) { return s.translate(x_5, y_5); });
            }
            else if (Array.isArray(v[0])) {
                var _b = v, _c = _b[0], x_6 = _c[0], y_6 = _c[1], duration_5 = _b[1], tween_5 = _b[2], callback_5 = _b[3];
                this.execOrDelay(function (s) { return s.translate(x_6, y_6, duration_5, tween_5, callback_5); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "animate", {
        set: function (f) {
            if (f === undefined) {
                this.execOrDelay(function (s) { return s.removeAnimationFunction(); });
            }
            else {
                this.execOrDelay(function (s) { return s.setAnimationFunction(f); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "constrain", {
        set: function (fs) {
            if (fs === undefined) {
                this.execOrDelay(function (s) { return s.withConstraint(); });
            }
            else {
                this.execOrDelay(function (s) { return s.withConstraint.apply(s, fs); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "hitArea", {
        /////////////////////////////////////////////
        // HIT AREA
        set: function (Clazz) {
            this.execOrDelay(function (s) { return s.withHitArea(Clazz); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "opacity", {
        /////////////////////////////////////////////
        // STYLE INPUTS
        set: function (alpha) {
            this.execOrDelay(function (s) { return s.opacity = alpha; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "compose", {
        set: function (c) {
            this.execOrDelay(function (s) { return s.compose(c.alpha, c.overlay); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "fill", {
        set: function (st) {
            if (Array.isArray(st)) {
                this.execOrDelay(function (s) { return s.withFill(st[0], st[1], st[2], st[3]); });
            }
            else {
                this.execOrDelay(function (s) { return s.withFill(st); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "stroke", {
        set: function (st) {
            if (Array.isArray(st)) {
                this.execOrDelay(function (s) {
                    s.withStroke(undefined, undefined, st[0].join, st[0].cap, st[0].dashOffset);
                    s.withStroke(st[0].width, st[0].style, st[1], st[2], st[3]);
                });
            }
            else {
                this.execOrDelay(function (s) { return s.withStroke(st.width, st.style, st.join, st.cap, st.dashOffset); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasBaseComponent.prototype, "shadow", {
        set: function (sh) {
            if (Array.isArray(sh)) {
                this.execOrDelay(function (s) { return s.withShadow(sh[0].blur, sh[0].color, sh[0].offsetX, sh[0].offsetY, sh[1], sh[2], sh[3]); });
            }
            else {
                this.execOrDelay(function (s) { return s.withShadow(sh.blur, sh.color, sh.offsetX, sh.offsetY); });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgvasBaseComponent.prototype.getShape = function () {
        return this._shape;
    };
    NgvasBaseComponent.prototype.initShape = function (origCanvas, ctx) {
        var _this = this;
        if (this._shape !== undefined) {
            return this._shape;
        }
        this._shape = new this.Clazz(origCanvas, ctx, this.name);
        if (this.clickEvent.observers.length > 0) {
            this._shape.addEventListener("click", function (e) { _this.clickEvent.emit(e); });
        }
        if (this.dblclickEvent.observers.length > 0) {
            this._shape.addEventListener("dblclick", function (e) { _this.dblclickEvent.emit(e); });
        }
        if (this.wheelEvent.observers.length > 0) {
            this._shape.addEventListener("wheel", function (e) { _this.wheelEvent.emit(e); });
        }
        if (this.mouseenterEvent.observers.length > 0) {
            this._shape.addEventListener("mouseenter", function (e) { _this.mouseenterEvent.emit(e); });
        }
        if (this.mouseleaveEvent.observers.length > 0) {
            this._shape.addEventListener("mouseleave", function (e) { _this.mouseleaveEvent.emit(e); });
        }
        // TODO Wrap this._shape in a Proxy to emit Outputs.
        // this._shape = new Proxy(this._shape, {
        //     set: function (oTarget: any, sKey: any, vValue: any) {
        //         // console.log("onChange in proxy", sKey, vValue);
        //         if (sKey in oTarget === false) { return false; }
        //         oTarget[sKey] = vValue;
        //         return true;
        //     }
        // });
        this._delayedSetters.forEach(function (f) { return f(_this._shape); });
        this._delayedSetters = [];
        this.shapeOut.emit(this._shape);
        return this._shape;
    };
    NgvasBaseComponent.prototype.execOrDelay = function (f) {
        this._shape ? f(this._shape) : this._delayedSetters.push(f);
    };
    return NgvasBaseComponent;
}());
NgvasBaseComponent.propDecorators = {
    'name': [{ type: core_1.Input, args: ["name",] },],
    'active': [{ type: core_1.Input, args: ["active",] },],
    'visible': [{ type: core_1.Input, args: ["visible",] },],
    'x': [{ type: core_1.Input, args: ["x",] },],
    'y': [{ type: core_1.Input, args: ["y",] },],
    'origin': [{ type: core_1.Input, args: ["origin",] },],
    'width': [{ type: core_1.Input, args: ["width",] },],
    'height': [{ type: core_1.Input, args: ["height",] },],
    'rotation': [{ type: core_1.Input, args: ["rotation",] },],
    'scaleX': [{ type: core_1.Input, args: ["scaleX",] },],
    'scaleY': [{ type: core_1.Input, args: ["scaleY",] },],
    'skewX': [{ type: core_1.Input, args: ["skewX",] },],
    'skewY': [{ type: core_1.Input, args: ["skewY",] },],
    'scale': [{ type: core_1.Input, args: ["scale",] },],
    'size': [{ type: core_1.Input, args: ["size",] },],
    'skew': [{ type: core_1.Input, args: ["skew",] },],
    'rotate': [{ type: core_1.Input, args: ["rotate",] },],
    'translate': [{ type: core_1.Input, args: ["translate",] },],
    'animate': [{ type: core_1.Input, args: ["animate",] },],
    'constrain': [{ type: core_1.Input, args: ["constrain",] },],
    'hitArea': [{ type: core_1.Input, args: ["hitArea",] },],
    'opacity': [{ type: core_1.Input, args: ["opacity",] },],
    'compose': [{ type: core_1.Input, args: ["compose",] },],
    'fill': [{ type: core_1.Input, args: ["fill",] },],
    'stroke': [{ type: core_1.Input, args: ["stroke",] },],
    'shadow': [{ type: core_1.Input, args: ["shadow",] },],
    'shapeOut': [{ type: core_1.Output, args: ["shape",] },],
    'clickEvent': [{ type: core_1.Output, args: ["click",] },],
    'dblclickEvent': [{ type: core_1.Output, args: ["dblclick",] },],
    'wheelEvent': [{ type: core_1.Output, args: ["wheel",] },],
    'mouseenterEvent': [{ type: core_1.Output, args: ["mouseenter",] },],
    'mouseleaveEvent': [{ type: core_1.Output, args: ["mouseleave",] },],
};
exports.NgvasBaseComponent = NgvasBaseComponent;
//# sourceMappingURL=base.component.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
var Group_1 = __webpack_require__(20);
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
var interfaces_1 = __webpack_require__(2);
var BaseStyle_1 = __webpack_require__(1);
var DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * Draws a filled and/or stroked arc.
 */
var ArcShape = (function (_super) {
    __extends(ArcShape, _super);
    function ArcShape(canvas, ctx, name) {
        if (name === void 0) { name = "Arc_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._angleDegree = 180;
        _this._connectToCenter = false;
        return _this;
    }
    Object.defineProperty(ArcShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.LINE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcShape.prototype, "radius", {
        get: function () {
            return this.width / 2;
        },
        set: function (r) {
            this.boundary.reset();
            this.boundary.setPoint([-r, -r]);
            this.boundary.setPoint([r, r]);
            if (this.originToCenter) {
                this.originToCenter = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcShape.prototype, "angle", {
        get: function () {
            return this._angleDegree;
        },
        set: function (deg) {
            this._angleDegree = Math.max(0, Math.min(360, deg));
        },
        enumerable: true,
        configurable: true
    });
    ArcShape.prototype.withRadius = function (r, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback, 5);
        }
        else {
            this.radius = r;
        }
        return this;
    };
    ArcShape.prototype.withAngle = function (deg, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [deg], ["angle"], callback, 10);
        }
        else {
            this.angle = deg;
        }
        return this;
    };
    ArcShape.prototype.connectToCenter = function (c) {
        this._connectToCenter = c;
        return this;
    };
    ArcShape.prototype.traceShape = function (ctx) {
        ctx.beginPath();
        if (this._connectToCenter) {
            ctx.moveTo(0 - this.originX, 0 - this.originY);
        }
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, DEG_TO_ANGLE * this._angleDegree);
        if (this._connectToCenter) {
            ctx.lineTo(0 - this.originX, 0 - this.originY);
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    ArcShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._angleDegree = 180;
        this._connectToCenter = false;
        return this;
    };
    ArcShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return ArcShape;
}(BaseStyle_1.BaseStyle));
exports.ArcShape = ArcShape;
//# sourceMappingURL=ArcShape.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PixelHitArea_1 = __webpack_require__(5);
var TweenManager_1 = __webpack_require__(23);
var Boundary_1 = __webpack_require__(17);
var DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * BaseShape abstract class.
 *
 * protected canvas: HTMLCanvasElement
 * protected ctx: CanvasRenderingContext2D
 * protected tweenManager: TweenManager
 * protected boundary: Boundary
 * protected customDraw (ctxt?: ContextTransformer): void
 */
var BaseShape = (function () {
    function BaseShape(canvas, ctx, _name) {
        if (_name === void 0) { _name = "Shape_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        this.canvas = canvas;
        this.ctx = ctx;
        this._name = _name;
        this._aniFunc = null;
        this._constraints = [];
        this._eventHandlers = {};
        this._currentCtxt = {
            scaleX: 0, scaleY: 0,
            skewX: 0, skewY: 0,
            moveX: 0, moveY: 0,
            rotate: 0,
        };
        this._x = 0;
        this._y = 0;
        this._originX = 0;
        this._originY = 0;
        this._rotation = 0;
        this._scaleX = 1.0;
        this._scaleY = 1.0;
        this._skewX = 0;
        this._skewY = 0;
        this._isActive = true;
        this._isVisible = true;
        this._originToCenter = false;
        this.tweenManager = new TweenManager_1.TweenManager();
        this.boundary = new Boundary_1.Boundary();
    }
    Object.defineProperty(BaseShape.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "x", {
        get: function () { return this._x; },
        set: function (v) { this._x = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "y", {
        get: function () { return this._y; },
        set: function (v) { this._y = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "width", {
        get: function () { return this.boundary.width; },
        set: function (v) {
            var h = this.height;
            this.boundary.reset();
            this.boundary.setPoint([0, 0]);
            this.boundary.setPoint([v, h]);
            if (this._originToCenter) {
                this.originToCenter = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "height", {
        get: function () { return this.boundary.height; },
        set: function (v) {
            var w = this.width;
            this.boundary.reset();
            this.boundary.setPoint([0, 0]);
            this.boundary.setPoint([w, v]);
            if (this._originToCenter) {
                this.originToCenter = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "originX", {
        get: function () { return this._originX; },
        set: function (v) { this._originX = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "originY", {
        get: function () { return this._originY; },
        set: function (v) { this._originY = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "rotation", {
        get: function () { return this._rotation; },
        set: function (v) { this._rotation = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "scaleX", {
        get: function () { return this._scaleX; },
        set: function (v) { this._scaleX = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "scaleY", {
        get: function () { return this._scaleY; },
        set: function (v) { this._scaleY = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "skewX", {
        get: function () { return this._skewX; },
        set: function (v) { this._skewX = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "skewY", {
        get: function () { return this._skewY; },
        set: function (v) { this._skewY = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "isActive", {
        get: function () { return this._isActive; },
        set: function (v) { this._isActive = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "isVisible", {
        get: function () { return this._isVisible; },
        set: function (v) { this._isVisible = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "originToCenter", {
        get: function () { return this._originToCenter; },
        set: function (v) {
            this._originToCenter = v;
            if (v) {
                _a = this.boundary.center, this.originX = _a[0], this.originY = _a[1];
            }
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    BaseShape.prototype.getBoundary = function () {
        return this.boundary.clone();
    };
    Object.defineProperty(BaseShape.prototype, "hitArea", {
        get: function () { return this._hitArea; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseShape.prototype, "contextTransform", {
        get: function () { return Object.assign({}, this._currentCtxt); },
        enumerable: true,
        configurable: true
    });
    BaseShape.prototype.origin = function (x, y, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["originX", "originY"], callback, 4);
        }
        else {
            this.originX = x;
            this.originY = y;
        }
        return this;
    };
    BaseShape.prototype.resize = function (w, h, duration, tween, callback) {
        if (h === void 0) { h = w; }
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [w, h], ["width", "height"], callback, 5);
        }
        else {
            this.width = w;
            this.height = h;
        }
        return this;
    };
    BaseShape.prototype.rotate = function (deg, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.rotation + deg], ["rotation"], callback);
        }
        else {
            this.rotation += deg;
        }
        return this;
    };
    BaseShape.prototype.scale = function (x, y, duration, tween, callback) {
        if (y === void 0) { y = x; }
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.scaleX * x, this.scaleY * y], ["scaleX", "scaleY"], callback, 20);
        }
        else {
            this.scaleX *= x;
            this.scaleY *= y;
        }
        return this;
    };
    BaseShape.prototype.skew = function (x, y, duration, tween, callback) {
        if (y === void 0) { y = x; }
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.skewX + x, this.skewY + y], ["skewX", "skewY"], callback, 9);
        }
        else {
            this.skewX += x;
            this.skewY += y;
        }
        return this;
    };
    BaseShape.prototype.translate = function (x, y, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.x + x, this.y + y], ["x", "y"], callback, 1);
        }
        else {
            this.x += x;
            this.y += y;
        }
        return this;
    };
    BaseShape.prototype.draw = function (ctxt) {
        var _this = this;
        if (this.isActive) {
            if (this._aniFunc !== null && !this._aniFunc(this)) {
                this._aniFunc = null;
            }
            this.tweenManager.tween();
            this._constraints.forEach(function (c) { return c(_this); });
        }
        if (this.isVisible) {
            this._currentCtxt.scaleX = ctxt.scaleX * this.scaleX;
            this._currentCtxt.scaleY = ctxt.scaleY * this.scaleY;
            this._currentCtxt.skewX = ctxt.skewX + (this.skewX * DEG_TO_ANGLE);
            this._currentCtxt.skewY = ctxt.skewY + (this.skewY * DEG_TO_ANGLE);
            this._currentCtxt.moveX = ctxt.moveX + this.x;
            this._currentCtxt.moveY = ctxt.moveY + this.y;
            this._currentCtxt.rotate = ctxt.rotate + this.rotation;
            this.ctx.setTransform(this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY, this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY);
            this.ctx.rotate(this._currentCtxt.rotate * DEG_TO_ANGLE);
            if (this._clipShape !== undefined) {
                var c = this._clipShape;
                // this.ctx.save();
                this.ctx.setTransform(this._currentCtxt.scaleX * c.scaleX, this._currentCtxt.skewX + (c.skewX * DEG_TO_ANGLE), this._currentCtxt.skewY + (c.skewY * DEG_TO_ANGLE), this._currentCtxt.scaleY * c.scaleY, this._currentCtxt.moveX + c.x, this._currentCtxt.moveY + c.y);
                this.ctx.rotate(c.rotation * DEG_TO_ANGLE);
                this._clipShape.customDraw(this._currentCtxt);
                // this.ctx.restore();
                this.ctx.clip();
                this.ctx.setTransform(this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY, this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY);
                this.ctx.rotate(-c.rotation * DEG_TO_ANGLE);
            }
            this.customDraw(this._currentCtxt);
        }
    };
    BaseShape.prototype.setAnimationFunction = function (f) {
        this._aniFunc = f;
    };
    BaseShape.prototype.removeAnimationFunction = function () {
        this._aniFunc = null;
    };
    BaseShape.prototype.isHit = function (x, y) {
        if (this.hitArea === undefined) {
            return false;
        }
        return this.hitArea.isHit(x, y, this._currentCtxt, this);
    };
    BaseShape.prototype.withClip = function (clipShape) {
        this._clipShape = clipShape;
        return this;
    };
    BaseShape.prototype.withConstraint = function () {
        var func = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            func[_i] = arguments[_i];
        }
        this._constraints = func;
        return this;
    };
    BaseShape.prototype.withHitArea = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var Clazz = args[0];
        if (Clazz === PixelHitArea_1.PixelHitArea && args[1] !== undefined) {
            this._hitArea = new PixelHitArea_1.PixelHitArea(this.canvas.width, this.canvas.height);
        }
        else if (typeof Clazz === "function") {
            var offset = args[1] || 1;
            this._hitArea = new Clazz(this.canvas.width, this.canvas.height, offset);
        }
        else {
            throw new ReferenceError("The first parameter must implement the IHitArea interface.");
        }
        return this;
    };
    BaseShape.prototype.addEventListener = function (event, listener) {
        var _this = this;
        this.removeEventListener(event);
        var rect = this.canvas.getBoundingClientRect();
        if (event === "click" || event === "dblclick") {
            this.canvas.addEventListener(event, this._eventHandlers[event] = function (evt) {
                var clientX = evt.clientX - rect.left, clientY = evt.clientY - rect.top;
                if (_this.isVisible && _this.isHit(clientX, clientY)) {
                    listener(evt);
                }
            }, false);
        }
        else if (event === "wheel") {
            this.canvas.addEventListener(event, this._eventHandlers.wheel = function (evt) {
                var clientX = evt.clientX - rect.left, clientY = evt.clientY - rect.top;
                if (_this.isVisible && _this.isHit(clientX, clientY)) {
                    listener(evt);
                }
            }, false);
        }
        else if (event === "mouseenter" || event === "mouseleave") {
            this._eventHandlers[event] = function (evt) { return listener(evt); };
            if ("mousemove" in this._eventHandlers === false) {
                var isOver_1 = false;
                this.canvas.addEventListener("mousemove", this._eventHandlers.mousemove = function (evt) {
                    var clientX = evt.clientX - rect.left, clientY = evt.clientY - rect.top;
                    var isHit = _this.isVisible && _this.isHit(clientX, clientY);
                    if (isOver_1 && !isHit) {
                        _this.canvas.style.cursor = "default";
                        isOver_1 = false;
                        if ("mouseleave" in _this._eventHandlers) {
                            _this._eventHandlers.mouseleave(evt);
                        }
                    }
                    else if (!isOver_1 && isHit) {
                        _this.canvas.style.cursor = "pointer";
                        isOver_1 = true;
                        if ("mouseenter" in _this._eventHandlers) {
                            _this._eventHandlers.mouseenter(evt);
                        }
                    }
                }, false);
            }
        }
    };
    BaseShape.prototype.removeEventListener = function (event) {
        if (event in this._eventHandlers) {
            this.canvas.removeEventListener(event, this._eventHandlers[event]);
            delete this._eventHandlers[event];
        }
        if ("mousemove" in this._eventHandlers && "mouseenter" in this._eventHandlers === false && "mouseleave" in this._eventHandlers === false) {
            this.canvas.removeEventListener("mousemove", this._eventHandlers.mousemove);
            delete this._eventHandlers.mousemove;
        }
    };
    BaseShape.prototype.clear = function () {
        this._originX = 0;
        this._originY = 0;
        this.tweenManager.clear();
        this.boundary.reset();
        return this;
    };
    return BaseShape;
}());
exports.BaseShape = BaseShape;
//# sourceMappingURL=BaseShape.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseStyle_1 = __webpack_require__(1);
var interfaces_1 = __webpack_require__(2);
var Boundary_1 = __webpack_require__(17);
/**
 * Draws a stroked line.
 */
var BezierCurveShape = (function (_super) {
    __extends(BezierCurveShape, _super);
    function BezierCurveShape(canvas, ctx, name) {
        if (name === void 0) { name = "BezierCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._curves = [];
        _this._boundary = new Boundary_1.Boundary();
        return _this;
    }
    Object.defineProperty(BezierCurveShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.LINE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierCurveShape.prototype, "width", {
        get: function () { return this._boundary.width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierCurveShape.prototype, "height", {
        get: function () { return this._boundary.height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierCurveShape.prototype, "numCurves", {
        get: function () {
            return this._curves.length;
        },
        enumerable: true,
        configurable: true
    });
    BezierCurveShape.prototype.addCurve = function (curve) {
        this._curves.push(curve);
        var p1 = curve[0], cp1 = curve[1], cp2 = curve[2], p2 = curve[3];
        this._boundary.setPoint(p1);
        this._boundary.setPoint(p2);
        this._boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    BezierCurveShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._curves = [];
        return this;
    };
    BezierCurveShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._curves.length < 1) {
            throw new ReferenceError("BezierCurveShape (" + this.name + ") must have at least one Point.");
        }
        var _a = this._curves, _b = _a[0], _c = _b[0], x = _c[0], y = _c[1], _d = _b[1], x2 = _d[0], y2 = _d[1], _e = _b[2], x3 = _e[0], y3 = _e[1], _f = _b[3], x4 = _f[0], y4 = _f[1], curvesTo = _a.slice(1);
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.bezierCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY, x4 - this.originX, y4 - this.originY);
        if (curvesTo !== undefined) {
            curvesTo.forEach(function (_a) {
                var _b = _a[1], _x2 = _b[0], _y2 = _b[1], _c = _a[2], _x3 = _c[0], _y3 = _c[1], _d = _a[3], _x4 = _d[0], _y4 = _d[1];
                return ctx.bezierCurveTo(_x2 - _this.originX, _y2 - _this.originY, _x3 - _this.originX, _y3 - _this.originY, _x4 - _this.originX, _y4 - _this.originY);
            });
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    BezierCurveShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return BezierCurveShape;
}(BaseStyle_1.BaseStyle));
exports.BezierCurveShape = BezierCurveShape;
//# sourceMappingURL=BezierCurveShape.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
var interfaces_1 = __webpack_require__(2);
var BaseStyle_1 = __webpack_require__(1);
var MathPIx2 = 6.2832; // 2 * Math.PI;
/**
 * Draws a filled and/or stroked circle.
 */
var CircleShape = (function (_super) {
    __extends(CircleShape, _super);
    function CircleShape(canvas, ctx, name) {
        if (name === void 0) { name = "Circle_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        return _super.call(this, canvas, ctx, name) || this;
    }
    Object.defineProperty(CircleShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "width", {
        set: function (v) { throw new ReferenceError("LineShape width cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "height", {
        set: function (v) { throw new ReferenceError("LineShape height cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "radius", {
        get: function () {
            return this.boundary.width / 2;
        },
        set: function (r) {
            this.boundary.reset();
            this.boundary.setPoint([-r, -r]);
            this.boundary.setPoint([r, r]);
            if (this.originToCenter) {
                this.originToCenter = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    CircleShape.prototype.withRadius = function (r, duration, tween, callback) {
        if (duration === void 0) { duration = 0; }
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback, 5);
        }
        else {
            this.radius = r;
        }
        return this;
    };
    CircleShape.prototype.traceShape = function (ctx) {
        ctx.beginPath();
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, MathPIx2);
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    CircleShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return CircleShape;
}(BaseStyle_1.BaseStyle));
exports.CircleShape = CircleShape;
//# sourceMappingURL=CircleShape.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseStyle_1 = __webpack_require__(1);
var interfaces_1 = __webpack_require__(2);
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseStyle_1 = __webpack_require__(1);
var interfaces_1 = __webpack_require__(2);
/**
 * Draws a stroked line.
 */
var LineShape = (function (_super) {
    __extends(LineShape, _super);
    function LineShape(canvas, ctx, name) {
        if (name === void 0) { name = "Line_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._linePoints = [];
        return _this;
    }
    Object.defineProperty(LineShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.LINE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "width", {
        set: function (v) { throw new ReferenceError("LineShape width cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "height", {
        set: function (v) { throw new ReferenceError("LineShape height cannot be set (" + v + ")."); },
        enumerable: true,
        configurable: true
    });
    LineShape.prototype.addLine = function (line) {
        this._linePoints.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    LineShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._linePoints = [];
        return this;
    };
    LineShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._linePoints.length < 1) {
            throw new ReferenceError("LineShape (" + this.name + ") must have at least one line.");
        }
        ctx.beginPath();
        this._linePoints.forEach(function (_a, i) {
            var _b = _a[0], x = _b[0], y = _b[1], _c = _a[1], x2 = _c[0], y2 = _c[1];
            if (i === 0) {
                ctx.moveTo(x - _this.originX, y - _this.originY);
            }
            ctx.lineTo(x2 - _this.originX, y2 - _this.originY);
        });
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    LineShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return LineShape;
}(BaseStyle_1.BaseStyle));
exports.LineShape = LineShape;
//# sourceMappingURL=LineShape.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

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
var interfaces_1 = __webpack_require__(2);
var BaseStyle_1 = __webpack_require__(1);
/**
 * Draws a filled and/or stroked polygon.
 */
var PolyShape = (function (_super) {
    __extends(PolyShape, _super);
    function PolyShape(canvas, ctx, name) {
        if (name === void 0) { name = "PolyShape_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._sidesCollection = [];
        return _this;
    }
    Object.defineProperty(PolyShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolyShape.prototype, "width", {
        get: function () { return this.boundary.width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolyShape.prototype, "height", {
        get: function () { return this.boundary.height; },
        enumerable: true,
        configurable: true
    });
    PolyShape.prototype.addLine = function (line) {
        this._sidesCollection.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    PolyShape.prototype.addBezier = function (curve) {
        this._sidesCollection.push(curve);
        var p1 = curve[0], cp1 = curve[1], cp2 = curve[2], p2 = curve[3];
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    PolyShape.prototype.addQuadratic = function (curve) {
        this._sidesCollection.push(curve);
        var p1 = curve[0], cp1 = curve[1], p2 = curve[2];
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    PolyShape.prototype.clear = function () {
        this.boundary.reset();
        this._sidesCollection = [];
        return this;
    };
    PolyShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._sidesCollection.length < 2) {
            throw new ReferenceError("PolyShape (" + this.name + ") must have at least two sides.");
        }
        var _a = this._sidesCollection[0][0], x = _a[0], y = _a[1];
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        this._sidesCollection.forEach(function (s) {
            // Line
            if (s.length === 2) {
                var _a = s[1], x2 = _a[0], y2 = _a[1];
                ctx.lineTo(x2 - _this.originX, y2 - _this.originY);
                // Quadratic
            }
            else if (s.length === 3) {
                var _b = s.slice(0, 3), _c = _b[1], x2 = _c[0], y2 = _c[1], _d = _b[2], x3 = _d[0], y3 = _d[1];
                ctx.quadraticCurveTo(x2 - _this.originX, y2 - _this.originY, x3 - _this.originX, y3 - _this.originY);
                // Bezier
            }
            else if (s.length === 4) {
                var _e = s.slice(0, 4), _f = _e[1], x2 = _f[0], y2 = _f[1], _g = _e[2], x3 = _g[0], y3 = _g[1], _h = _e[3], x4 = _h[0], y4 = _h[1];
                ctx.bezierCurveTo(x2 - _this.originX, y2 - _this.originY, x3 - _this.originX, y3 - _this.originY, x4 - _this.originX, y4 - _this.originY);
            }
        });
        ctx.closePath();
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    PolyShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return PolyShape;
}(BaseStyle_1.BaseStyle));
exports.PolyShape = PolyShape;
//# sourceMappingURL=PolyShape.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseStyle_1 = __webpack_require__(1);
var interfaces_1 = __webpack_require__(2);
/**
 * Draws a stroked line.
 */
var QuadraticCurveShape = (function (_super) {
    __extends(QuadraticCurveShape, _super);
    function QuadraticCurveShape(canvas, ctx, name) {
        if (name === void 0) { name = "QuadraticCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        var _this = _super.call(this, canvas, ctx, name) || this;
        _this._curves = [];
        return _this;
    }
    Object.defineProperty(QuadraticCurveShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuadraticCurveShape.prototype, "numCurves", {
        get: function () {
            return this._curves.length;
        },
        enumerable: true,
        configurable: true
    });
    QuadraticCurveShape.prototype.addCurve = function (curve) {
        this._curves.push(curve);
        var p1 = curve[0], cp1 = curve[1], p2 = curve[2];
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    };
    QuadraticCurveShape.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._curves = [];
        return this;
    };
    QuadraticCurveShape.prototype.traceShape = function (ctx) {
        var _this = this;
        if (this._curves.length < 1) {
            throw new ReferenceError("QuadraticCurveShape (" + this.name + ") must have at least one Point.");
        }
        var _a = this._curves, _b = _a[0], _c = _b[0], x = _c[0], y = _c[1], _d = _b[1], x2 = _d[0], y2 = _d[1], _e = _b[2], x3 = _e[0], y3 = _e[1], curvesTo = _a.slice(1);
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.quadraticCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY);
        if (curvesTo !== undefined) {
            curvesTo.forEach(function (_a) {
                var _b = _a[1], _x2 = _b[0], _y2 = _b[1], _c = _a[2], _x3 = _c[0], _y3 = _c[1];
                return ctx.quadraticCurveTo(_x2 - _this.originX, _y2 - _this.originY, _x3 - _this.originX, _y3 - _this.originY);
            });
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    };
    QuadraticCurveShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return QuadraticCurveShape;
}(BaseStyle_1.BaseStyle));
exports.QuadraticCurveShape = QuadraticCurveShape;
//# sourceMappingURL=QuadraticCurveShape.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseStyle_1 = __webpack_require__(1);
var interfaces_1 = __webpack_require__(2);
/**
 * Draws a filled and/or stroked rectangle.
 */
var RectShape = (function (_super) {
    __extends(RectShape, _super);
    function RectShape(canvas, ctx, name) {
        if (name === void 0) { name = "Rect_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); }
        return _super.call(this, canvas, ctx, name) || this;
    }
    Object.defineProperty(RectShape.prototype, "type", {
        get: function () { return interfaces_1.ShapeType.SHAPE; },
        enumerable: true,
        configurable: true
    });
    RectShape.prototype.traceShape = function (ctx) {
        if (this.styleManager.hasFill) {
            ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
        if (this.styleManager.hasStroke) {
            ctx.strokeRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
    };
    RectShape.prototype.customDraw = function () {
        this.traceShape(this.ctx);
    };
    return RectShape;
}(BaseStyle_1.BaseStyle));
exports.RectShape = RectShape;
//# sourceMappingURL=RectShape.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseStyle_1 = __webpack_require__(1);
var interfaces_1 = __webpack_require__(2);
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    TERMS OF USE - EASING EQUATIONS
    ---------------------------------------------------------------------------------
    Open source under the BSD License.
    Copyright © 2001 Robert Penner All rights reserved.
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer. Redistributions in binary
    form must reproduce the above copyright notice, this list of conditions and
    the following disclaimer in the documentation and/or other materials provided
    with the distribution. Neither the name of the author nor the names of
    contributors may be used to endorse or promote products derived from this
    software without specific prior written permission.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    ---------------------------------------------------------------------------------
*/

Object.defineProperty(exports, "__esModule", { value: true });
var PI_M2 = 6.2832; // Math.PI * 2;
var PI_D2 = 1.5708; // Math.PI / 2;
/*
Linear
---------------------------------------------------------------------------------
*/
function easeLinear(t, b, c, d) {
    return c * t / d + b;
}
exports.easeLinear = easeLinear;
/*
Sine
---------------------------------------------------------------------------------
*/
function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * PI_D2) + c + b;
}
exports.easeInSine = easeInSine;
function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * PI_D2) + b;
}
exports.easeOutSine = easeOutSine;
function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
exports.easeInOutSine = easeInOutSine;
/*
Quintic
---------------------------------------------------------------------------------
*/
function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}
exports.easeInQuint = easeInQuint;
function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
exports.easeOutQuint = easeOutQuint;
function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}
exports.easeInOutQuint = easeInOutQuint;
/*
Quartic
---------------------------------------------------------------------------------
*/
function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}
exports.easeInQuart = easeInQuart;
function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
exports.easeOutQuart = easeOutQuart;
function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}
exports.easeInOutQuart = easeInOutQuart;
/*
Quadratic
---------------------------------------------------------------------------------
*/
function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}
exports.easeInQuad = easeInQuad;
function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}
exports.easeOutQuad = easeOutQuad;
function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}
exports.easeInOutQuad = easeInOutQuad;
/*
Exponential
---------------------------------------------------------------------------------
*/
function easeInExpo(t, b, c, d) {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}
exports.easeInExpo = easeInExpo;
function easeOutExpo(t, b, c, d) {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
exports.easeOutExpo = easeOutExpo;
function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
        return b;
    }
    if (t === d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
exports.easeInOutExpo = easeInOutExpo;
/*
Elastic
---------------------------------------------------------------------------------
*/
function easeInElastic(t, b, c, d, a, p) {
    var s;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    ;
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
}
exports.easeInElastic = easeInElastic;
function easeOutElastic(t, b, c, d, a, p) {
    var s;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    ;
    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * PI_M2 / p) + c + b);
}
exports.easeOutElastic = easeOutElastic;
function easeInOutElastic(t, b, c, d, a, p) {
    var s;
    if (t === 0) {
        return b;
    }
    if ((t /= d / 2) === 2) {
        return b + c;
    }
    if (!p) {
        p = d * (.3 * 1.5);
    }
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    if (t < 1) {
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p) * .5 + c + b;
}
exports.easeInOutElastic = easeInOutElastic;
/*
Circular
---------------------------------------------------------------------------------
*/
function easeInCircular(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
exports.easeInCircular = easeInCircular;
function easeOutCircular(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
exports.easeOutCircular = easeOutCircular;
function easeInOutCircular(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
exports.easeInOutCircular = easeInOutCircular;
/*
Back
---------------------------------------------------------------------------------
*/
function easeInBack(t, b, c, d, s) {
    if (s === void 0) { s = 1.70158; }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
exports.easeInBack = easeInBack;
function easeOutBack(t, b, c, d, s) {
    if (s === void 0) { s = 1.70158; }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
exports.easeOutBack = easeOutBack;
function easeInOutBack(t, b, c, d, s) {
    if (s === void 0) { s = 1.70158; }
    if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
}
exports.easeInOutBack = easeInOutBack;
/*
Bounce
---------------------------------------------------------------------------------
*/
function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
}
exports.easeInBounce = easeInBounce;
function easeOutBounce(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    }
    else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    }
    else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    }
    else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
}
exports.easeOutBounce = easeOutBounce;
function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
        return easeInBounce(t * 2, 0, c, d) * .5 + b;
    }
    else {
        return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
}
exports.easeInOutBounce = easeInOutBounce;
/*
Cubic
---------------------------------------------------------------------------------
*/
function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}
exports.easeInCubic = easeInCubic;
function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
exports.easeOutCubic = easeOutCubic;
function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}
exports.easeInOutCubic = easeInOutCubic;
//# sourceMappingURL=easing.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parseColorStyle(color) {
    var rgbaColor;
    if (typeof color === "string") {
        color = color.trim();
        if (color.indexOf("rgba(") === 0) {
            rgbaColor = color.slice(5, -1).split(",").map(function (c) { return parseInt(c.trim(), 10); });
        }
        else if (color.indexOf("rgb(") === 0) {
            rgbaColor = color.slice(4, -1).split(",").map(function (c) { return parseInt(c.trim(), 10); });
            rgbaColor.push(1);
        }
        else if (color.indexOf("#") === 0 && color.length === 7) {
            rgbaColor = [color.slice(1, 3), color.slice(3, 5), color.slice(5), "1"].map(function (c) { return +("0x" + c); });
        }
        else if (color.indexOf("#") === 0 && color.length === 9) {
            rgbaColor = [color.slice(1, 3), color.slice(3, 5), color.slice(5), color.slice(6)].map(function (c) { return parseInt(c, 16); });
            rgbaColor[3] /= 255;
        }
        else if (color.indexOf("#") === 0) {
            rgbaColor = [color.slice(1, 2), color.slice(2, 3), color.slice(3)].map(function (c) { return +("0x" + c + c); });
            rgbaColor.push(1);
        }
        else {
            throw new ReferenceError("The ngvas library does not understand the style \"" + color + "\".");
        }
    }
    else if (typeof color === "number") {
        rgbaColor = [color >> 16, color >> 8 << 8, color, 1];
        rgbaColor[2] = (rgbaColor[2] - rgbaColor[1]);
        rgbaColor[1] = (rgbaColor[1] - (rgbaColor[0] << 16) - rgbaColor[2]) >> 8;
    }
    else {
        throw new ReferenceError("The ngvas library does not understand the style \"" + color + "\".");
    }
    return rgbaColor;
}
exports.parseColorStyle = parseColorStyle;
function toRgbaString(color) {
    return "rgba(" + color.join() + ")";
}
exports.toRgbaString = toRgbaString;
//# sourceMappingURL=color-style-parser.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(35);
var ngvas_component_1 = __webpack_require__(33);
var ngvas_arc_component_1 = __webpack_require__(24);
var ngvas_bezier_component_1 = __webpack_require__(25);
var ngvas_circle_component_1 = __webpack_require__(26);
var ngvas_image_component_1 = __webpack_require__(27);
var ngvas_line_component_1 = __webpack_require__(28);
var ngvas_polygon_component_1 = __webpack_require__(29);
var ngvas_quadratic_component_1 = __webpack_require__(30);
var ngvas_rectange_component_1 = __webpack_require__(31);
var ngvas_text_component_1 = __webpack_require__(32);
var NgvasModule = (function () {
    function NgvasModule() {
    }
    return NgvasModule;
}());
NgvasModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                ],
                declarations: [
                    ngvas_component_1.NgvasComponent,
                    ngvas_arc_component_1.NgvasArcComponent,
                    ngvas_bezier_component_1.NgvasBezierCurveComponent,
                    ngvas_circle_component_1.NgvasCircleComponent,
                    ngvas_image_component_1.NgvasImageComponent,
                    ngvas_line_component_1.NgvasLineComponent,
                    ngvas_polygon_component_1.NgvasPolygonComponent,
                    ngvas_quadratic_component_1.NgvasQuadraticCurveComponent,
                    ngvas_rectange_component_1.NgvasRectangleComponent,
                    ngvas_text_component_1.NgvasTextComponent,
                ],
                exports: [
                    ngvas_component_1.NgvasComponent,
                    ngvas_arc_component_1.NgvasArcComponent,
                    ngvas_bezier_component_1.NgvasBezierCurveComponent,
                    ngvas_circle_component_1.NgvasCircleComponent,
                    ngvas_image_component_1.NgvasImageComponent,
                    ngvas_line_component_1.NgvasLineComponent,
                    ngvas_polygon_component_1.NgvasPolygonComponent,
                    ngvas_quadratic_component_1.NgvasQuadraticCurveComponent,
                    ngvas_rectange_component_1.NgvasRectangleComponent,
                    ngvas_text_component_1.NgvasTextComponent,
                ],
            },] },
];
/** @nocollapse */
NgvasModule.ctorParameters = function () { return []; };
exports.NgvasModule = NgvasModule;
//# sourceMappingURL=ngvas.module.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

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
var interfaces_1 = __webpack_require__(2);
var BaseStyle_1 = __webpack_require__(1);
var Group = (function (_super) {
    __extends(Group, _super);
    function Group(canvas, ctx, name) {
        var _this = _super.call(this, canvas, ctx, name) || this;
        // Render children from high to 0 index.
        _this._children = [];
        _this.__isVisible = true;
        _this.__isActive = true;
        return _this;
    }
    Object.defineProperty(Group.prototype, "type", {
        get: function () {
            return interfaces_1.ShapeType.GROUP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "isActive", {
        get: function () { return this.__isActive; },
        set: function (v) { this.__isActive = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "isVisible", {
        get: function () { return this.__isVisible; },
        set: function (v) { this.__isVisible = v; },
        enumerable: true,
        configurable: true
    });
    Group.prototype.withText = function () {
        throw new Error("This method is not supported in StyleManager.");
    };
    Group.prototype.numChildren = function () {
        return this._children.length;
    };
    Group.prototype.addChild = function (shape) {
        this._children.push(shape);
        return this;
    };
    Group.prototype.removeChild = function (shape) {
        this._children = this._children.filter(function (s) { return s === shape; });
        return this;
    };
    Group.prototype.removeChildAt = function (index) {
        var child = this._children[index];
        this._children = this._children.filter(function (s) { return s !== child; });
        return child;
    };
    Group.prototype.removeAllChildren = function () {
        this._children = [];
    };
    Group.prototype.traceShape = function (ctx) {
        this._children.filter(function (c) { return c.traceShape !== undefined; }).forEach(function (c) { return c.traceShape(ctx); });
    };
    Group.prototype.customDraw = function (ctxt) {
        if (this.isActive || this.isVisible) {
            this._children.forEach(function (c) {
                // c.originX += this.originX + c.x;
                // c.originY += this.originY + c.y;
                c.draw(ctxt);
                // c.originX -= this.originX + c.x;
                // c.originY -= this.originY + c.y;
            });
        }
    };
    Group.prototype.isHit = function (x, y) {
        if (!this.isVisible) {
            return false;
        }
        // Runs hitArea on every child.
        var isHit = false;
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.isVisible && c.isHit(x, y)) {
                isHit = true;
            }
        }
        return isHit;
    };
    return Group;
}(BaseStyle_1.BaseStyle));
exports.Group = Group;
//# sourceMappingURL=Group.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StyleManager = (function () {
    function StyleManager(ctx) {
        this.ctx = ctx;
        this.ctxValues = {};
    }
    Object.defineProperty(StyleManager.prototype, "hasFill", {
        get: function () {
            return !!this.ctxValues.fillStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleManager.prototype, "hasStroke", {
        get: function () {
            return !!this.ctxValues.lineWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleManager.prototype, "lineWidth", {
        get: function () {
            return this.ctxValues.lineWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleManager.prototype, "opacity", {
        get: function () {
            return this.ctxValues.globalAlpha;
        },
        set: function (alpha) {
            this.ctxValues.globalAlpha = alpha;
        },
        enumerable: true,
        configurable: true
    });
    StyleManager.prototype.compose = function (alpha, overlay) {
        this.ctxValues.globalAlpha = undefinedOr(alpha, this.ctxValues.globalAlpha);
        this.ctxValues.globalCompositeOperation = undefinedOr(overlay, this.ctxValues.globalCompositeOperation);
        return this;
    };
    StyleManager.prototype.withFill = function (style) {
        this.ctxValues.fillStyle = undefinedOr(style, this.ctxValues.fillStyle);
        return this;
    };
    StyleManager.prototype.withStroke = function (width, style, join, cap, dashOffset, miterLimit) {
        this.ctxValues.lineCap = undefinedOr(cap, this.ctxValues.lineCap);
        this.ctxValues.lineDashOffset = undefinedOr(dashOffset, this.ctxValues.lineDashOffset);
        this.ctxValues.lineJoin = undefinedOr(join, this.ctxValues.lineJoin);
        this.ctxValues.lineWidth = undefinedOr(width, this.ctxValues.lineWidth);
        this.ctxValues.strokeStyle = undefinedOr(style, this.ctxValues.strokeStyle);
        this.ctxValues.miterLimit = undefinedOr(miterLimit, this.ctxValues.miterLimit);
        return this;
    };
    StyleManager.prototype.withShadow = function (blur, color, offsetX, offsetY) {
        this.ctxValues.shadowBlur = undefinedOr(blur, this.ctxValues.shadowBlur);
        this.ctxValues.shadowColor = undefinedOr(color, this.ctxValues.shadowColor);
        this.ctxValues.shadowOffsetX = undefinedOr(offsetX, this.ctxValues.shadowOffsetX);
        this.ctxValues.shadowOffsetY = undefinedOr(offsetY, this.ctxValues.shadowOffsetY);
        return this;
    };
    StyleManager.prototype.withText = function () {
        throw new Error("This method is not supported in StyleManager.");
    };
    StyleManager.prototype.textStyle = function (font, align, baseline) {
        this.ctxValues.font = undefinedOr(font, this.ctxValues.font);
        this.ctxValues.textAlign = undefinedOr(align, this.ctxValues.textAlign);
        this.ctxValues.textBaseline = undefinedOr(baseline, this.ctxValues.textBaseline);
        return this;
    };
    StyleManager.prototype.begin = function () {
        this.ctx.save();
        for (var p in this.ctxValues) {
            if (this.ctxValues.hasOwnProperty(p)) {
                this.ctx[p] = this.ctxValues[p];
            }
        }
    };
    StyleManager.prototype.end = function () {
        this.ctx.restore();
    };
    StyleManager.prototype.clear = function () {
        this.ctxValues = {};
    };
    return StyleManager;
}());
exports.StyleManager = StyleManager;
function undefinedOr(arg, ctxProp) {
    return arg !== undefined ? arg : ctxProp;
}
//# sourceMappingURL=StyleManager.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_style_parser_1 = __webpack_require__(18);
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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var easing_1 = __webpack_require__(16);
var TweenManager = (function () {
    function TweenManager() {
        this._collection = [];
    }
    // private _preExecutor: Function[] = [];
    // private _postExecutor: Function[] = [];
    /**
     * Execute tweens.
     */
    TweenManager.prototype.tween = function () {
        // this._preExecutor.forEach(e => e());
        this._collection = this._collection.filter(function (f) { return f(); });
        // this._postExecutor.forEach(e => e());
    };
    TweenManager.prototype.clear = function () {
        this._collection = [];
        // this._preExecutor = [];
        // this._postExecutor = [];
    };
    // public addPreExecutor (f: Function) {
    //     this._preExecutor.push(f);
    // }
    // public addPostExecutor (f: Function) {
    //     this._postExecutor.push(f);
    // }
    TweenManager.prototype.addTween = function (target, tween, duration, toValues, paramKeys, callback, priority, preFunc, postFunc) {
        if (priority === void 0) { priority = 10; }
        var start = Date.now();
        var end = Date.now() + duration;
        var startValues = paramKeys.map(function (k) { return target[k]; });
        var func = function () {
            var now = Date.now();
            if (preFunc !== undefined) {
                preFunc();
            }
            if (now >= end) {
                paramKeys.forEach(function (k, i) { target[k] = toValues[i]; });
                if (postFunc !== undefined) {
                    postFunc(toValues);
                }
                if (callback !== undefined) {
                    callback(target);
                }
                return false;
            }
            var results = startValues.map(function (v, i) { return (tween || easing_1.easeLinear)(now - start, v, toValues[i] - v, duration); });
            paramKeys.forEach(function (p, i) { target[p] = results[i]; });
            if (postFunc !== undefined) {
                postFunc(results);
            }
            return true;
        };
        func["$priority"] = priority;
        this._collection.push(func);
        this._collection.sort(function (a, b) { return a.$priority - b.$priority; });
    };
    return TweenManager;
}());
exports.TweenManager = TweenManager;
//# sourceMappingURL=TweenManager.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ArcShape_1 = __webpack_require__(6);
var base_component_1 = __webpack_require__(3);
var NgvasArcComponent = (function (_super) {
    __extends(NgvasArcComponent, _super);
    function NgvasArcComponent() {
        return _super.call(this, ArcShape_1.ArcShape) || this;
    }
    Object.defineProperty(NgvasArcComponent.prototype, "connectToCenter", {
        set: function (c) {
            this.execOrDelay(function (s) { return s.connectToCenter(c); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasArcComponent.prototype, "radius", {
        set: function (v) {
            if (Array.isArray(v)) {
                this.execOrDelay(function (s) { return s.withRadius(v[0], v[1], v[2], v[3]); });
            }
            else {
                this.execOrDelay(function (s) { return s.withRadius(v); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasArcComponent.prototype, "angle", {
        set: function (v) {
            if (Array.isArray(v)) {
                this.execOrDelay(function (s) { return s.withAngle(v[0], v[1], v[2], v[3]); });
            }
            else {
                this.execOrDelay(function (s) { return s.withAngle(v); });
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgvasArcComponent;
}(base_component_1.NgvasBaseComponent));
NgvasArcComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-arc",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasArcComponent }],
            },] },
];
/** @nocollapse */
NgvasArcComponent.ctorParameters = function () { return []; };
NgvasArcComponent.propDecorators = {
    'connectToCenter': [{ type: core_1.Input, args: ["connectToCenter",] },],
    'radius': [{ type: core_1.Input, args: ["radius",] },],
    'angle': [{ type: core_1.Input, args: ["angle",] },],
};
exports.NgvasArcComponent = NgvasArcComponent;
//# sourceMappingURL=ngvas-arc.component.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var BezierCurveShape_1 = __webpack_require__(8);
var base_component_1 = __webpack_require__(3);
var NgvasBezierCurveComponent = (function (_super) {
    __extends(NgvasBezierCurveComponent, _super);
    function NgvasBezierCurveComponent() {
        return _super.call(this, BezierCurveShape_1.BezierCurveShape) || this;
    }
    Object.defineProperty(NgvasBezierCurveComponent.prototype, "curves", {
        set: function (cs) { this.execOrDelay(function (s) { s.clear(); cs.forEach(function (c) { return s.addCurve(c); }); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasBezierCurveComponent;
}(base_component_1.NgvasBaseComponent));
NgvasBezierCurveComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-bezier",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasBezierCurveComponent }],
            },] },
];
/** @nocollapse */
NgvasBezierCurveComponent.ctorParameters = function () { return []; };
NgvasBezierCurveComponent.propDecorators = {
    'curves': [{ type: core_1.Input, args: ["curves",] },],
};
exports.NgvasBezierCurveComponent = NgvasBezierCurveComponent;
//# sourceMappingURL=ngvas-bezier.component.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var CircleShape_1 = __webpack_require__(9);
var base_component_1 = __webpack_require__(3);
var NgvasCircleComponent = (function (_super) {
    __extends(NgvasCircleComponent, _super);
    function NgvasCircleComponent() {
        return _super.call(this, CircleShape_1.CircleShape) || this;
    }
    Object.defineProperty(NgvasCircleComponent.prototype, "radius", {
        set: function (v) {
            if (Array.isArray(v)) {
                this.execOrDelay(function (s) { return s.withRadius(v[0], v[1], v[2], v[3]); });
            }
            else {
                this.execOrDelay(function (s) { return s.withRadius(v); });
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgvasCircleComponent;
}(base_component_1.NgvasBaseComponent));
NgvasCircleComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-circle",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasCircleComponent }],
            },] },
];
/** @nocollapse */
NgvasCircleComponent.ctorParameters = function () { return []; };
NgvasCircleComponent.propDecorators = {
    'radius': [{ type: core_1.Input, args: ["radius",] },],
};
exports.NgvasCircleComponent = NgvasCircleComponent;
//# sourceMappingURL=ngvas-circle.component.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ImageShape_1 = __webpack_require__(10);
var base_component_1 = __webpack_require__(3);
var NgvasImageComponent = (function (_super) {
    __extends(NgvasImageComponent, _super);
    function NgvasImageComponent() {
        return _super.call(this, ImageShape_1.ImageShape) || this;
    }
    Object.defineProperty(NgvasImageComponent.prototype, "src", {
        set: function (i) { this.execOrDelay(function (s) { return s.withImage(i); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasImageComponent;
}(base_component_1.NgvasBaseComponent));
NgvasImageComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-image",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasImageComponent }],
            },] },
];
/** @nocollapse */
NgvasImageComponent.ctorParameters = function () { return []; };
NgvasImageComponent.propDecorators = {
    'src': [{ type: core_1.Input, args: ["src",] },],
};
exports.NgvasImageComponent = NgvasImageComponent;
//# sourceMappingURL=ngvas-image.component.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var LineShape_1 = __webpack_require__(11);
var base_component_1 = __webpack_require__(3);
var NgvasLineComponent = (function (_super) {
    __extends(NgvasLineComponent, _super);
    function NgvasLineComponent() {
        return _super.call(this, LineShape_1.LineShape) || this;
    }
    Object.defineProperty(NgvasLineComponent.prototype, "lines", {
        set: function (ls) { this.execOrDelay(function (s) { s.clear(); ls.forEach(function (l) { return s.addLine(l); }); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasLineComponent;
}(base_component_1.NgvasBaseComponent));
NgvasLineComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-line",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasLineComponent }],
            },] },
];
/** @nocollapse */
NgvasLineComponent.ctorParameters = function () { return []; };
NgvasLineComponent.propDecorators = {
    'lines': [{ type: core_1.Input, args: ["lines",] },],
};
exports.NgvasLineComponent = NgvasLineComponent;
//# sourceMappingURL=ngvas-line.component.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var PolyShape_1 = __webpack_require__(12);
var base_component_1 = __webpack_require__(3);
var NgvasPolygonComponent = (function (_super) {
    __extends(NgvasPolygonComponent, _super);
    function NgvasPolygonComponent() {
        return _super.call(this, PolyShape_1.PolyShape) || this;
    }
    Object.defineProperty(NgvasPolygonComponent.prototype, "sides", {
        set: function (ls) {
            this.execOrDelay(function (s) {
                s.clear();
                for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
                    var l = ls_1[_i];
                    if (l.length === 2) {
                        s.addLine(l);
                    }
                    else if (l.length === 3) {
                        s.addQuadratic(l);
                    }
                    else if (l.length === 4) {
                        s.addBezier(l);
                    }
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasPolygonComponent;
}(base_component_1.NgvasBaseComponent));
NgvasPolygonComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-polygon",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasPolygonComponent }],
            },] },
];
/** @nocollapse */
NgvasPolygonComponent.ctorParameters = function () { return []; };
NgvasPolygonComponent.propDecorators = {
    'sides': [{ type: core_1.Input, args: ["sides",] },],
};
exports.NgvasPolygonComponent = NgvasPolygonComponent;
//# sourceMappingURL=ngvas-polygon.component.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var QuadraticCurveShape_1 = __webpack_require__(13);
var base_component_1 = __webpack_require__(3);
var NgvasQuadraticCurveComponent = (function (_super) {
    __extends(NgvasQuadraticCurveComponent, _super);
    function NgvasQuadraticCurveComponent() {
        return _super.call(this, QuadraticCurveShape_1.QuadraticCurveShape) || this;
    }
    Object.defineProperty(NgvasQuadraticCurveComponent.prototype, "curves", {
        set: function (cs) { this.execOrDelay(function (s) { s.clear(); cs.forEach(function (c) { return s.addCurve(c); }); }); },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasQuadraticCurveComponent;
}(base_component_1.NgvasBaseComponent));
NgvasQuadraticCurveComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-quadratic",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasQuadraticCurveComponent }],
            },] },
];
/** @nocollapse */
NgvasQuadraticCurveComponent.ctorParameters = function () { return []; };
NgvasQuadraticCurveComponent.propDecorators = {
    'curves': [{ type: core_1.Input, args: ["curves",] },],
};
exports.NgvasQuadraticCurveComponent = NgvasQuadraticCurveComponent;
//# sourceMappingURL=ngvas-quadratic.component.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var RectShape_1 = __webpack_require__(14);
var base_component_1 = __webpack_require__(3);
var NgvasRectangleComponent = (function (_super) {
    __extends(NgvasRectangleComponent, _super);
    function NgvasRectangleComponent() {
        return _super.call(this, RectShape_1.RectShape) || this;
    }
    return NgvasRectangleComponent;
}(base_component_1.NgvasBaseComponent));
NgvasRectangleComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-rectangle",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasRectangleComponent }],
            },] },
];
/** @nocollapse */
NgvasRectangleComponent.ctorParameters = function () { return []; };
exports.NgvasRectangleComponent = NgvasRectangleComponent;
//# sourceMappingURL=ngvas-rectange.component.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var TextShape_1 = __webpack_require__(15);
var base_component_1 = __webpack_require__(3);
var NgvasTextComponent = (function (_super) {
    __extends(NgvasTextComponent, _super);
    function NgvasTextComponent() {
        return _super.call(this, TextShape_1.TextShape) || this;
    }
    Object.defineProperty(NgvasTextComponent.prototype, "text", {
        set: function (t) { this.execOrDelay(function (s) { return s.text = t; }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgvasTextComponent.prototype, "textStyle", {
        set: function (t) {
            this.execOrDelay(function (s) { return s.textStyle(t.font, t.align, t.baseline); });
        },
        enumerable: true,
        configurable: true
    });
    ;
    return NgvasTextComponent;
}(base_component_1.NgvasBaseComponent));
NgvasTextComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-text",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasTextComponent }],
            },] },
];
/** @nocollapse */
NgvasTextComponent.ctorParameters = function () { return []; };
NgvasTextComponent.propDecorators = {
    'text': [{ type: core_1.Input, args: ["text",] },],
    'textStyle': [{ type: core_1.Input, args: ["textStyle",] },],
};
exports.NgvasTextComponent = NgvasTextComponent;
//# sourceMappingURL=ngvas-text.component.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var CanvasGroup_1 = __webpack_require__(4);
var base_component_1 = __webpack_require__(3);
var NgvasComponent = (function () {
    function NgvasComponent(renderer) {
        this.renderer = renderer;
        this._width = 0;
        this._height = 0;
        this._isActive = true;
        this.ready = new core_1.EventEmitter();
    }
    Object.defineProperty(NgvasComponent.prototype, "width", {
        set: function (w) {
            this._width = +w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasComponent.prototype, "height", {
        set: function (h) {
            this._height = +h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgvasComponent.prototype, "active", {
        set: function (a) {
            this._isActive = a;
        },
        enumerable: true,
        configurable: true
    });
    NgvasComponent.prototype.getShape = function () {
        return this._canvasGroup;
    };
    /**
     * Fires once after ng-content is intitialized.
     */
    NgvasComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var canvas = this.canvasRef.nativeElement;
        this.renderer.setAttribute(canvas, "width", String(this._width));
        this.renderer.setAttribute(canvas, "height", String(this._height));
        this._canvasGroup = new CanvasGroup_1.CanvasGroup(canvas, undefined, this._isActive);
        this.contentChildren.forEach(function (c) { return _this._canvasGroup.addChild(c.initShape(canvas, _this._canvasGroup.context)); });
        this.ready.emit(this);
        this._contentSubscription = this.contentChildren.changes
            .subscribe(function (c) {
            _this._canvasGroup.removeAllChildren();
            c.forEach(function (c2) { return _this._canvasGroup.addChild(c2.initShape(canvas, _this._canvasGroup.context)); });
        });
    };
    /**
     * Fires when the component is destroyed.
     */
    NgvasComponent.prototype.ngOnDestroy = function () {
        this._canvasGroup.isActive = false;
        this._canvasGroup.removeAllChildren();
        if (this._contentSubscription !== undefined) {
            this._contentSubscription.unsubscribe();
        }
    };
    return NgvasComponent;
}());
NgvasComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas",
                template: "<ng-content></ng-content><canvas #ngvasCanvas></canvas>",
                styles: [":not(canvas) { display: none; }"],
            },] },
];
/** @nocollapse */
NgvasComponent.ctorParameters = function () { return [
    { type: core_1.Renderer2, decorators: [{ type: core_1.Inject, args: [core_1.Renderer2,] },] },
]; };
NgvasComponent.propDecorators = {
    'canvasRef': [{ type: core_1.ViewChild, args: ["ngvasCanvas",] },],
    'contentChildren': [{ type: core_1.ContentChildren, args: [base_component_1.NgvasBaseComponent,] },],
    'ready': [{ type: core_1.Output, args: ["ready",] },],
    'width': [{ type: core_1.Input, args: ["width",] },],
    'height': [{ type: core_1.Input, args: ["height",] },],
    'active': [{ type: core_1.Input, args: ["active",] },],
};
exports.NgvasComponent = NgvasComponent;
//# sourceMappingURL=ngvas.component.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PixelHitArea_1 = __webpack_require__(5);
var BaseStyle_1 = __webpack_require__(1);
var _tweenEasings = __webpack_require__(16);
var CanvasGroup_1 = __webpack_require__(4);
var ArcShape_1 = __webpack_require__(6);
var BaseShape_1 = __webpack_require__(7);
var BezierCurveShape_1 = __webpack_require__(8);
var CircleShape_1 = __webpack_require__(9);
var ImageShape_1 = __webpack_require__(10);
var LineShape_1 = __webpack_require__(11);
var PolyShape_1 = __webpack_require__(12);
var QuadraticCurveShape_1 = __webpack_require__(13);
var RectShape_1 = __webpack_require__(14);
var TextShape_1 = __webpack_require__(15);
var ngvas_module_1 = __webpack_require__(19);
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

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ })
/******/ ]);
});