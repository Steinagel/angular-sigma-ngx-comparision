import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGraphModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
