import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../service/communication.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component  implements OnInit {
  simpleFormList: any[] = [];

  constructor(
    private communicationService: CommunicationService
  ) {
  }

  ngOnInit(): void {
    this.communicationService.message$.subscribe({
      next: (data) => {
        this.simpleFormList.push(data);
      }
    });
  }

}
