import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    return this.http.post<number>(`${this.baseUrl}/subjects`, subject);
  }

  findAllSubjects() {
    return this.http.get<Array<SubjectResponse>>(`${this.baseUrl}/subjects`);
  }

  findById(subjectId: number) {
    return this.http.get<SubjectResponse>(`${this.baseUrl}/subjects/${subjectId}`);
  }
}
