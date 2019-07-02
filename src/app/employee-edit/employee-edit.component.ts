import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/Employee';

import { ActivatedRoute } from '@angular/router';
import { employeeService } from '../employee.service';
import { Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { concatAll } from 'rxjs/operators';
import { States } from '../models/States';
import { routerNgProbeToken } from '@angular/router/src/router_module';
//import { clearLine } from 'readline';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee:Employee;
  tester:Employee;
  states:States[]=[
    {name:'AL'},    {name:'AK'},
    {name:'AZ'},    {name:'AR'},    {name:'CA'},
    {name:'CO'},    {name:'CT'},    {name:'DE'},
    {name:'FL'},    {name:'GA'},    {name:'HI'},
    {name:'ID'},    {name:'IL'},    {name:'IN'},
    {name:'IA'},    {name:'KS'},    {name:'KY'},
    {name:'LA'},    {name:'ME'},    {name:'MD'},
    {name:'MA'},    {name:'MI'},    {name:'MN'},
    {name:'MS'},    {name:'MO'},    {name:'MT'},
    {name:'NE'},    {name:'NV'},    {name:'NH'},
    {name:'NJ'},    {name:'NM'},    {name:'NY'},
    {name:'NC'},    {name:'ND'},    {name:'OH'},
    {name:'OK'},    {name:'OR'},    {name:'PA'},
    {name:'RI'},    {name:'SC'},    {name:'SD'},
    {name:'TN'},    {name:'TX'},    {name:'UT'},
    {name:'VT'},    {name:'VA'},    {name:'WA'},
    {name:'WV'},    {name:'WI'},    {name:'WY'}
  ];




  constructor(private route: ActivatedRoute,private fb: FormBuilder, private employeeService: employeeService, private location: Location) {
    //this.emp = EmployeeEditComponent.employee
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{const id = +paramMap.get('ID'); this.getEmployee(id)})
    
    this.route.paramMap.subscribe(params=> {
      this.tester={
        id:null,
        firstName:'',
        lastName:'',
        address:'',
        city:'',
        state:'select',
        zip:'',
        cellPhone:'',
        homePhone:'',
        email:''
      }
    })
    
  
    
  }
  
  getEmployee(id:number){
    this.employeeService.getEmployee(id).subscribe(
      (data)=>{console.log(data);
        this.tester = data;
        this.tester.id = data.id;

        console.log(this.tester.id);
        // this.tester.FIRST_NAME=data.firstName;
        // console.log(this.tester.FIRST_NAME);
        // this.tester.LAST_NAME=data[0].LAST_NAME;
        // this.tester.ADDRESS=data[0].ADDRESS;
        // this.tester.CITY=data[0].CITY;
        // this.tester.STATE = data[0].STATE;
        // this.tester.ZIP = data[0].ZIP;
        // this.tester.CELL_PHONE = data[0].CELL_PHONE;
        // this.tester.HOME_PHONE = data[0].HOME_PHONE;
        // this.tester.EMAIL = data[0].EMAIL
      }
    )
  }

  Cancel():void{
    this.location.back();
  }

  Save(form): void{
    //console.log(this.tester.id);
    this.employeeService.updateEmployee(this.tester).subscribe()
    

    
  }
  


}
