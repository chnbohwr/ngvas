"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PixelHitArea_1 = require("../hit-area/PixelHitArea");
var TweenManager_1 = require("../tweens/TweenManager");
var Boundary_1 = require("../Boundary");
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