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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { RatInAMazeComponent } from './rat-in-a-maze/rat-in-a-maze.component';
import { HomeComponent } from './home/home.component';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimsComponent,
    TestComponent,
    GetMaxFromArrayComponent,
    MergeSortComponent,
    RatInAMazeComponent,
    HomeComponent,
    SortingComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
