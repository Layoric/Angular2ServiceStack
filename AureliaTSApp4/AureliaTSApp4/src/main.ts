import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
enableProdMode();

browserDynamicPlatform().bootstrapModule(AppModule);