import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from '../../service/communication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  simpleFormList: any[] = [];
  private subscription: Subscription | undefined;

  constructor(
    private communicationService: CommunicationService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.communicationService.message$.subscribe({
      next: (data) => {
        this.simpleFormList.push(data);
      }
    });
    console.log(this.subscription);
  }

  ngOnDestroy(): void {
    console.log('unsubscribe');
    this.subscription?.unsubscribe();
    console.log('unsubscribed --> ', this.subscription);
  }

}
