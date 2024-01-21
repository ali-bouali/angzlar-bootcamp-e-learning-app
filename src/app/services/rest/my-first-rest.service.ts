import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentResponse} from './student-response';

@Injectable({
  providedIn: 'root'
})
export class MyFirstRestService {

  constructor(
    private http: HttpClient
  ) { }

  findAllStudents() {
    return this.http.get<StudentResponse>('http://localhost:8080/students');
  }
}
