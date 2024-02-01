import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SubjectResponse} from '../../models/subject-response';
import {environment} from '../../../environments/environment';
import {SubjectRequest} from '../../models/subject-request';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseUrl = environment.app.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  saveSubject(subject: SubjectRequest) {
    let header: HttpHeaders = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<number>(`${this.baseUrl}/subjects`, subject, {headers: header});
  }

  findAllSubjects() {
    let header: HttpHeaders = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Array<SubjectResponse>>(`${this.baseUrl}/subjects`, {headers: header});
  }

  findById(subjectId: number) {
    let header: HttpHeaders = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<SubjectResponse>(`${this.baseUrl}/subjects/${subjectId}`, {headers: header});
  }
}
