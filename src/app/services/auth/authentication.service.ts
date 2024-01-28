import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequest} from '../../models/register-request';
import {AuthRequest} from '../../models/auth-request';
import {AuthResponse} from '../../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'http://localhost:8080';
  // eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdG5hbWUiOiJBbGkiLCJzdWIiOiJhbGlAbWFpbC5jb20iLCJpYXQiOjE3MDY0NzEwNzksImV4cCI6MTcwNjU1NzQ3OX0.AuSdBk5O9je-75Ywyk8wLV2DllZCuYY-1gplU39NHUOJaLKuomsZT4Y7YoqoIdO1vOn_uQKseVE54EkLn-ZuAQ

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
