import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequest} from '../../models/register-request';
import {AuthRequest} from '../../models/auth-request';
import {AuthResponse} from '../../models/auth-response';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.app.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, registerRequest);
  }

  login(registerRequest: AuthRequest) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, registerRequest);
  }
}
