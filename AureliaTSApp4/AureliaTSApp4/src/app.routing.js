"use strict";
var hello_1 = require('./hello/hello');
var view1_1 = require('./view1/view1');
var view2_1 = require('./view2/view2');
exports.appRoutes = [
    { path: '', component: hello_1.HelloComponent, data: { name: 'Home' } },
    { path: 'view1', component: view1_1.View1Component, data: { name: 'View 1' } },
    { path: 'view2', component: view2_1.View2Component, data: { name: 'View 2' } }
];
//# sourceMappingURL=app.routing.js.map