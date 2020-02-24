import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatMomentDateModule,
  MatInputModule,
  FormsModule,
  MatCheckboxModule,
  MatSliderModule,
  HttpClientModule
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [...modules,
    MDBBootstrapModule.forRoot()],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
