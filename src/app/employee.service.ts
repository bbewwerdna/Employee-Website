import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Employee } from '../app/models/Employee';
import { LEmployee } from './models/LEmployee';
import { Lexer } from '@angular/compiler';
import { Router, NavigationStart } from '@angular/router';
//import { EMPLOYEE1 } from './models/EMPLOYEE1';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({ providedIn: 'root' })
export class employeeService {
  
  
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private http: HttpClient,private router:Router){
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
              // only keep for a single location change
              this.keepAfterNavigationChange = false;
          } else {
              // clear alert
              this.subject.next();
          }
      }
  });
  }
  private employeesUrl = 'http://localhost:8080/getemployees';
  private addEmployeeUrl = 'http://localhost:8080/addemployee';
  private editEmployeeUrl = 'http://localhost:8080/editemployees';
  private LoginIfoUrl = 'http://localhost:3306/loginemployee';
  private loginaut = 'http://localhost:3306/api/auth'
  

  findEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeesUrl);
  }
  getEmployee(ID:number):Observable<Employee>{
    //console.log(employeeService.employeesUrl)
    const url = `${this.employeesUrl}/${ID}`;
    //console.log('url: ' + url);
    return this.http.get<Employee>(url)
  }
  

  updateEmployee(employee:Employee):Observable<void>{
    console.log(employee.id);
    return this.http.put<void>(`${this.editEmployeeUrl}/${employee.id}`, employee, httpOptions);
  }

  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.addEmployeeUrl}`, employee, httpOptions)
    
  }

  getLoginInfo(){
    //console.log(lemployee);
    let blah = this.http.get<LEmployee[]>(`${this.LoginIfoUrl}`,httpOptions)
    console.log(blah);
  }

  login(lemployee:LEmployee):Observable<any>{
    return this.http.post<any>(`${this.LoginIfoUrl}`, lemployee)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));


    
    
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
  // logout(){
  //   localStorage.removeItem('access_token');
  // }
  // public get loggedIn(): boolean{
  //   return (localStorage.getItem('access_token')!==null);
  // }
  
  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }



  success(message: string, keepAfterNavigationChange = false) {
  this.keepAfterNavigationChange = keepAfterNavigationChange;
  this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
  this.keepAfterNavigationChange = keepAfterNavigationChange;
  this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
  return this.subject.asObservable();
  }







  


 
}
