import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {AuthRequest} from '../../models/auth-request';
import {TokenService} from '../../modules/app-common/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
  }

  login() {
    this.errorMsg = [];
    this.authService.login(this.authRequest)
      .subscribe({
        next: (res) => {
          this.tokenService.token = res.token as string;
          this.redirectConnectedUser();
        },
        error: (err) => {
          console.log(err);
          if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else {
            this.errorMsg.push(err.error.errorMsg);
          }
        }
      });
  }

  private redirectConnectedUser() {
    if (this.tokenService.isStudent()) {
      this.router.navigate(['student']);
    } else if (this.tokenService.isTeacher()) {
      this.router.navigate(['teacher']);
    }
  }

  register() {
    this.router.navigate(['register']);
  }
}
