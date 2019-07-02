import { Injectable } from '@angular/core';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  // createDb() {
  //   const employees = [
  //     { id: 0, firstName: 'Mr. Nice',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah' },
  //     { id: 1, firstName: 'Narco',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 2, firstName: 'Bombasto',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 3, firstName: 'Celeritas',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 4, firstName: 'Magneta',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 5, firstName: 'RubberMan',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 6, firstName: 'Dynama',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 7, firstName: 'Dr IQ',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 8, firstName: 'Magma',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  },
  //     { id: 9, firstName: 'Tornado',lastName:'blah',address: "aaaa",city:'Baton Rouge',state:'LA',zip:'77777',homePhone:'2222222222',cellPhone:'3333333333',email:'blah@blah',fullName:'Mr.Nice blah'  }
  //   ];
  //   return {employees};
  // }

  // genId(employees: Employee[]): number {
  //   return employees.length > 0 ? Math.max(...employees.map(employee => employee.id))  : 19;
  // }
  // constructor() { }
}
