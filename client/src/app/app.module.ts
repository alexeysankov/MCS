import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from "./modules/angular-material.module";
import { AppRoutingModule, routedComponents } from './app.routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
