import { Routes,Router } from '@angular/router';
import { HelloComponent } from './hello/hello';
import { View1Component } from './view1/view1';
import { View2Component } from './view2/view2';

export const appRoutes: Routes = [
    { path: '', component: HelloComponent, data: { name: 'Home' } },
    { path: 'view1', component: View1Component, data: { name: 'View 1' } },
    { path: 'view2', component: View2Component, data: { name: 'View 2' } }
];