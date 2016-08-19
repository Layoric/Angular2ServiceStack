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
var servicestack_client_1 = require('servicestack-client');
var dtos_1 = require('./../dtos');
var HelloComponent = (function () {
    function HelloComponent() {
        this.client = new servicestack_client_1.JsonServiceClient('/');
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.nameChanged(this.name);
    };
    HelloComponent.prototype.nameChanged = function (newValue) {
        var _this = this;
        if (newValue.length > 0) {
            var req = new dtos_1.Hello();
            req.Name = newValue;
            this.client.get(req).then(function (helloResponse) {
                _this.result = helloResponse.Result;
            });
        }
        else {
            this.result = '';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hello',
            templateUrl: 'hello.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=hello.js.map