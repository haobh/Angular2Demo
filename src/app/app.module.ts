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
import { UserListComponent } from './user.component';
import { UserServices } from './user.services';
import { UserDetailComponent } from './user-detail.component';
import { UserAddComponent } from './user-add.component';
import { UserEditComponent } from './user-edit.component';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    AppComponent, TurtorialComponent, HomeComponent, EmployeeComponent,
    EmployeeListComponent, EmployeeDetailComponent, EmployeeEditComponent, EmployeeAddComponent,
    UserListComponent, UserDetailComponent, UserAddComponent, UserEditComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [
    EmployeeServices,
    UserServices
  ],
  bootstrap: [AppComponent]
  //bootstrap:[LoginComponent]
})
export class AppModule { }
