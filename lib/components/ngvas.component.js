"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CanvasGroup_1 = require("../canvas/CanvasGroup");
var base_component_1 = require("./base.component");
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