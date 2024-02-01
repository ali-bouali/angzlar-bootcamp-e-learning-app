import {Component, OnInit} from '@angular/core';
import {SubjectRequest} from '../../../../models/subject-request';
import {SubjectService} from '../../../../services/subject/subject.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.scss']
})
export class ManageSubjectComponent implements OnInit {

  subjectRequest: SubjectRequest = {id: 0, description: '', name: ''};
  errorMsg: Array<string> = [];

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const subjectId = this.activatedRoute.snapshot.params['subjectId'];
    if (subjectId){
      this.subjectService.findById(subjectId)
        .subscribe({
          next: (res) => {
            this.subjectRequest = {
              id: res.id,
              name: res.name as string,
              description: res.description as string
            };
          }
        });
    }
  }

  cancel() {
    this.router.navigate(['teacher', 'subjects']);
  }

  save() {
    this.errorMsg = [];
    this.subjectService.saveSubject(this.subjectRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['teacher', 'subjects']);
        },
        error: (err) => {
          this.errorMsg = err.error.validationErrors;
        }
      });
  }
}
