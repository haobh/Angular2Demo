import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './hom.component';
import { EmployeeComponent } from './employee.component';
import { TurtorialComponent } from './turtorial.component';
import { EmployeeListComponent } from './employeeapi.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'turtorial', component: TurtorialComponent },
    { path: 'employeeapi', component: EmployeeListComponent },
    { path: 'employeeapi/employee-detail/:id', component: EmployeeDetailComponent },
    { path: 'employeeapi/employee-edit/:id', component: EmployeeEditComponent },
    { path: 'employeeapi/employee-add', component: EmployeeAddComponent },
    { path: 'employeeapi/employee-delete', component: EmployeeListComponent }

]
export const appRoutes = RouterModule.forRoot(routing);