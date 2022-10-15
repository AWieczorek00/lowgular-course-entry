import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {EmployeeModel} from "../model/employee.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>("assets/data/employees.json");
  }
}
