import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubjectResponse} from '../../models/subject-response';
import {environment} from '../../../environments/environment';
import {SubjectRequest} from '../../models/subject-request';
import {SubjectPageResponse} from '../../models/subject-page-response';

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

  findAllSubjects(page = 0, size = 4) {
    return this.http.get<SubjectPageResponse>(`${this.baseUrl}/subjects`,
      {
        params: {
          'page': page,
          'size': size
        }
      }
    );
  }

  findById(subjectId: number) {
    return this.http.get<SubjectResponse>(`${this.baseUrl}/subjects/${subjectId}`);
  }
}
