import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SubjectResponse} from '../../models/subject-response';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseUrl = environment.app.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  findAllSubjects() {
    let header: HttpHeaders = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Array<SubjectResponse>>(`${this.baseUrl}/subjects`, {headers: header});
  }

}
