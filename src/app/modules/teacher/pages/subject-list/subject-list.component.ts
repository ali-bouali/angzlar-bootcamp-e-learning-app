import {Component, OnInit} from '@angular/core';
import {SubjectResponse} from '../../../../models/subject-response';
import {SubjectService} from '../../../../services/subject/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  subjects: Array<SubjectResponse> = [];

  constructor(
    private subjectService: SubjectService
  ) {}


  ngOnInit(): void {
    this.subjectService.findAllSubjects()
      .subscribe({
        next: (data) => {
          this.subjects = data;
        }
      });
  }
}
