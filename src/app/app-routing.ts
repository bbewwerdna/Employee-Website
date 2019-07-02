import {Routes, RouterModule} from "@angular/router";


import {ModuleWithProviders} from "@angular/core";

import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./employees/employees.component"
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { LoginComponent } from './login/login.component';
import { employeeService } from './employee.service';



const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home',component: LoginComponent},
    {path: 'employees',component: EmployeesComponent},
    {path: 'employee-edit/:ID',component:EmployeeEditComponent},
    {path: 'employee-add',component:EmployeeAddComponent},
   // {path: 'employees',component: EmployeesComponent}
    //{path: 'CustomerManagement',component: CustomerManagementComponent},

]

export const AppRouting : ModuleWithProviders = RouterModule.forRoot(routes,{useHash: true});