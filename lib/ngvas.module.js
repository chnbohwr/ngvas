"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const common_1 = require("@angular/common");
const ngvas_component_1 = require("./components/ngvas.component");
const ngvas_arc_component_1 = require("./components/ngvas-arc.component");
const ngvas_bezier_component_1 = require("./components/ngvas-bezier.component");
const ngvas_circle_component_1 = require("./components/ngvas-circle.component");
const ngvas_image_component_1 = require("./components/ngvas-image.component");
const ngvas_line_component_1 = require("./components/ngvas-line.component");
const ngvas_polygon_component_1 = require("./components/ngvas-polygon.component");
const ngvas_quadratic_component_1 = require("./components/ngvas-quadratic.component");
const ngvas_rectange_component_1 = require("./components/ngvas-rectange.component");
const ngvas_text_component_1 = require("./components/ngvas-text.component");
let NgvasModule = class NgvasModule {
};
NgvasModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
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
    })
], NgvasModule);
exports.NgvasModule = NgvasModule;
//# sourceMappingURL=ngvas.module.js.map