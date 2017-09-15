"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngvas_component_1 = require("./components/ngvas.component");
var ngvas_arc_component_1 = require("./components/ngvas-arc.component");
var ngvas_bezier_component_1 = require("./components/ngvas-bezier.component");
var ngvas_circle_component_1 = require("./components/ngvas-circle.component");
var ngvas_image_component_1 = require("./components/ngvas-image.component");
var ngvas_line_component_1 = require("./components/ngvas-line.component");
var ngvas_polygon_component_1 = require("./components/ngvas-polygon.component");
var ngvas_quadratic_component_1 = require("./components/ngvas-quadratic.component");
var ngvas_rectange_component_1 = require("./components/ngvas-rectange.component");
var ngvas_text_component_1 = require("./components/ngvas-text.component");
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