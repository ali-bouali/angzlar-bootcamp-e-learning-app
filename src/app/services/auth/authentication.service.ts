import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequest} from '../../models/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, registerRequest);
  }
}
