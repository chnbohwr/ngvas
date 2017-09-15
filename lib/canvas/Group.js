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
var interfaces_1 = require("./shapes/interfaces");
var BaseStyle_1 = require("./styles/BaseStyle");
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