import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
//import {ApplicationModule} from './../plugins/angular.nest.module';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatMomentDateModule,
  MatInputModule,
  FormsModule,
 // ApplicationModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
