import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AppRouting } from './app-routing';


import { HttpClientModule } from '@angular/common/http';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { employeeService } from './employee.service';
import { LoginComponent } from './login/login.component';

import {JwtModule } from '@auth0/angular-jwt';


export function tokenGetter(){
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,
    AppRouting,
    ReactiveFormsModule,

    NgbModule,

    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
    
  ],
  providers: [{provide: "employeeService", useClass: employeeService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
