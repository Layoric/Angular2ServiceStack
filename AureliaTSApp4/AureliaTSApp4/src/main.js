"use strict";
require('zone.js');
require('reflect-metadata');
require('es6-shim');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.browserDynamicPlatform().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map