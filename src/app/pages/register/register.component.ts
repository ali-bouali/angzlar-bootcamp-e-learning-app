import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private router: Router
  ) {
  }

  login() {
    this.router.navigate(['login']);
  }

  register() {

  }
}
