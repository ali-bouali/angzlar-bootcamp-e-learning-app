import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private messageSource = new Subject<any>();
  message$ = this.messageSource.asObservable();

  constructor() { }

  sendMessage(body: any) {
    this.messageSource.next(body);
  }
}
