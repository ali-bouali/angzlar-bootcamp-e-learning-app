import { Component } from '@angular/core';
import {MyFirstService} from './services/s1/my-first.service';
import {MyFirstRestService} from './services/rest/my-first-rest.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-learning';
  result = 0;

  constructor(
    private myService: MyFirstService,
    private restService: MyFirstRestService
  ) {}


  calculateSum() {
    this.restService.findAllStudents()
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log('REST Call result received');
        },
        error: (err) => {
          console.log('REST call error');
          console.log(err);
        },
        complete: () => {
          console.log('REST call done');
        }
      });

    this.result = this.myService.sum(3, 5);
    // some code
  }

  async asyncCall() {
    // promise
    const res = await lastValueFrom(this.restService.findAllStudents());
    this.result = this.myService.sum(Math.random(), 5);
  }
}
