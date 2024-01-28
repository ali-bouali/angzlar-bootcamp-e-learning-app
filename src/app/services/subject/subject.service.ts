import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SubjectResponse} from '../../models/subject-response';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseUrl = 'http://localhost:8080';
  jwtToken =  'eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdG5hbWUiOiJBbGkiLCJzdWIiOiJhbGlAbWFpbC5jb20iLCJpYXQiOjE3MDY0NzEwNzksImV4cCI6MTcwNjU1NzQ3OX0.AuSdBk5O9je-75Ywyk8wLV2DllZCuYY-1gplU39NHUOJaLKuomsZT4Y7YoqoIdO1vOn_uQKseVE54EkLn-ZuAQ';

  constructor(
    private http: HttpClient
  ) { }

  findAllSubjects() {
    let header: HttpHeaders = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + this.jwtToken);
    return this.http.get<Array<SubjectResponse>>(`${this.baseUrl}/subjects`, {headers: header});
  }

}
