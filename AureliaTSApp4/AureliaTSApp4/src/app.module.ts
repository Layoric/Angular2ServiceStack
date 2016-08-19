import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello';
import { View1Component } from './view1/view1';
import { View2Component } from './view2/view2';
import { RouterModule } from '@angular/router';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import {
    appRoutes
} from './app.routing';
import {
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy
} from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    declarations: [
        AppComponent,
        HelloComponent,
        View1Component,
        View2Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}