import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';
import { employeeService } from '../employee.service'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
//import { Z_UNKNOWN } from 'zlib';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm:FormGroup;
  employee:Employee
  
  states =['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV',
  'NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

  constructor(private employeeService: employeeService,private fb:FormBuilder,private route: Router,private router: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    //this.getEmployees();

    this.router.paramMap.subscribe(params=> {
      this.employee={
        id:null,
        firstName:'',
        lastName:'',
        address:'',
        city:'',
        state:'',
        zip:'',
        cellPhone:'',
        homePhone:'',
        email:''
      }
    })
    this.formReset();
  }

  formReset(){
    this.employeeForm = this.fb.group({
      firstName: new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(35),Validators.pattern("[A-Za-z]*")]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(35),Validators.pattern("[A-Za-z]*")]),
      address: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(50),Validators.pattern("[A-Za-z\\'\\- 0-9]*")]),
      city: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(50),Validators.pattern("[A-Za-z]*")]),
      state: new FormControl('',[Validators.minLength(2)]),
      zip: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(9),Validators.pattern("[+\\- 0-9]*")]),
      cellPhone: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[+'\\- 0-9]*")]),
      homePhone: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[+\\- 0-9]*")]),
      email: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(50),Validators.email])
    })
  }
  
  onSubmit(){
    this.getEmployeeData();
    this.employeeService.addEmployee(this.employee).subscribe();
  }
  Cancel():void{
    this.location.back();
  }

  getEmployeeData(){
    this.employee.firstName = this.employeeForm.value.firstName;
    this.employee.lastName = this.employeeForm.value.lastName;
    this.employee.address = this.employeeForm.value.address;
    this.employee.city = this.employeeForm.value.city;
    this.employee.state = this.employeeForm.value.state;
    
    this.employee.zip = this.employeeForm.value.zip;
    this.employee.cellPhone = this.employeeForm.value.cellPhone;
    this.employee.homePhone = this.employeeForm.value.homePhone;
    this.employee.email = this.employeeForm.value.email;
  }
  // getEmployees(): void{
  //   this.employeeService.findAll().subscribe(heroes => this.heroes = heroes);
  // }


}
