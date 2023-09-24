import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// This is the FormsModule that angular sues
// this import is required for the "Template-Driven" Forms approach...
// it's the automatic inference of the form's object shape
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/core'


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
