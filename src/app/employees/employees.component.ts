import { Component, OnInit, Input, Inject } from '@angular/core';


import { Employee } from '../models/Employee';
import { employeeService } from '../employee.service';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
//import { EMPLOYEE1 } from '../models/EMPLOYEE1';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';


@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  hero:Employee;
  heroes:Employee[];

  employeeForm: FormGroup;


  constructor(private fb: FormBuilder,private employeeService: employeeService/*@Inject("EmployeeService") private employeeService : employeeService*/) {
      this.hero =JSON.parse(localStorage.getItem('currentUser'))
  }

  ngOnInit() {
      
    this.employeeService.findEmployees()
      .subscribe( data => {this.heroes = data,console.log(data)});
    ;
    //this.employeeService.getEmployee(3).subscribe(data=>console.log(data));


    }

}
