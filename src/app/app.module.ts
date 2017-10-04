import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgGridModule } from 'angular2-grid';
import { PopoverModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGridModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
