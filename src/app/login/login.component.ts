import { Component, OnInit } from '@angular/core';
import { LEmployee } from '../models/LEmployee';
import { employeeService } from '../employee.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lemployee: LEmployee = {EMAIL:'',PASSWORD:''};
  lemployeeForm: FormGroup;
  submitted=false;
  loading=false;
  constructor(private employeeService: employeeService,private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.lemployeeForm = this.fb.group({
      EMAIL:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(35),Validators.email]),
      PASSWORD:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(35), Validators.pattern("[A-Za-z\\'\\- 0-9]*")])
    })
    
    //this.employeeService.getLoginInfo()
    
    //this.Lemployee = { EMAIL:'',PASSWORD:''}
  }

  submit(){
    this.submitted = true;
    if(this.lemployeeForm.invalid){
      return;
    }
    this.getEmployeeData();
    this.router.navigate(['/employees'])
    //console.log(this.lemployee.EMAIL)
    


    // this.loading = true;
    //     this.employeeService.login(this.lemployee)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 this.router.navigate(['/employees']);
    //             },
    //             error => {
    //                 this.employeeService.error(error);
    //                 this.loading = false;
    //             });

  }
  getEmployeeData(){
    this.lemployee.EMAIL = this.lemployeeForm.value.EMAIL;
    //console.log(this.lemployeeForm.value.EMAIL)
    this.lemployee.PASSWORD = this.lemployeeForm.value.PASSWORD;

  }

  // getLoginInfo(){
  //   this.employeeService.getLoginInfo().subscribe(data=>{console.log(data),this.data=data
  //     var b=0;
      
      
  //     while(this.pass === false){
  //       console.log(this.data[b].EMAIL);
  //       console.log(this.Lemployee.EMAIL);
  //       if(this.data[b].EMAIL === this.Lemployee.EMAIL && this.data[b].PASSWORD === this.Lemployee.PASSWORD){
  //         this.pass = true;
  //       }
  //       b++
        
  //     }
  //     console.log(this.pass)
  //   })
    
  // }

}
