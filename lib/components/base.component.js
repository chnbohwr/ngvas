"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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