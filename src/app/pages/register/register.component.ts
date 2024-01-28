import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {RegisterRequest} from '../../models/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {email: '', firstname: '', lastname: '', password: ''};
  errorMsg: Array<string> = [];
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.errorMsg = [];
    this.authService.register(this.registerRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['login']);
        },
        error: (err) => {
          this.errorMsg = err.error.validationErrors;
        }
      });
  }
}
