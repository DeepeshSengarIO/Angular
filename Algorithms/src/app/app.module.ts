import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimsComponent } from './prims/prims.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GetMaxFromArrayComponent } from './get-max-from-array/get-max-from-array.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimsComponent,
    TestComponent,
    GetMaxFromArrayComponent,
    MergeSortComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
