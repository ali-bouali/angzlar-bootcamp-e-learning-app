import {Component, OnInit} from '@angular/core';
import {SubjectResponse} from '../../../../models/subject-response';
import {SubjectService} from '../../../../services/subject/subject.service';
import {SubjectPageResponse} from '../../../../models/subject-page-response';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  subjects: SubjectPageResponse = {};
  pages: any = [];
  page = 0;
  size = 2;

  constructor(
    private subjectService: SubjectService
  ) {}


  ngOnInit(): void {
    this.findAllSubjects();
  }

  private findAllSubjects() {
    this.subjectService.findAllSubjects(this.page, this.size)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.subjects = data;
          this.pages = Array(this.subjects.totalPages)
            .fill(0)
            .map((x, i) => i);
        }
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllSubjects();
  }
}
