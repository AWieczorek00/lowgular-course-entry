import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {PersonModel} from "../model/person.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PresonService {
  constructor(private _httpClient:HttpClient) {
  }
  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/employees.json')
  }
}
