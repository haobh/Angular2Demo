import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TurtorialComponent } from './turtorial.component';
import { appRoutes } from './app.route';
import { HomeComponent } from './hom.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employeeapi.component';
import { EmployeeServices } from './employee.services';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';


@NgModule({
  declarations: [
    AppComponent, TurtorialComponent, HomeComponent, EmployeeComponent,
    EmployeeListComponent, EmployeeDetailComponent, EmployeeEditComponent, EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [
    EmployeeServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
