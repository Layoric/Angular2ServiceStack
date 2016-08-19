"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hello_1 = require('./../hello/hello');
var View1Component = (function () {
    function View1Component() {
        this.message = "View 1";
    }
    View1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'view-one',
            template: "\n    <div>\n        <h2>{{message}}</h2>\n        <hello [name]=\"'from view 1!'\"></hello>\n    </div>",
            directives: [hello_1.HelloComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], View1Component);
    return View1Component;
}());
exports.View1Component = View1Component;
//# sourceMappingURL=view1.js.map