import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public employee=[
    {"one":"1","two":"2"}
  ];
}
