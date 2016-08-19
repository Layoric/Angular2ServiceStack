/// <reference path='../typings/index.d.ts'/>
import { Component } from '@angular/core';
import { appRoutes } from './app.routing';
import { RouterLink } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.html',
    directives: [RouterLink]
})
export class AppComponent {
    title = 'Angular2App1';
    routes = appRoutes;
}
