import {Component, OnInit} from '@angular/core';
import {SubjectRequest} from '../../../../models/subject-request';
import {SubjectService} from '../../../../services/subject/subject.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

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
    private activatedRoute: ActivatedRoute,
    private translationService: TranslateService
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
          console.log(err.error.validationErrors);
          for(let i = 0; i < err.error.validationErrors.length; i++) {
            this.errorMsg.push(
              this.translationService.instant('TEACHER.SUBJECT.ERRORS.' + err.error.validationErrors[i])
            );
          }
          // this.errorMsg = err.error.validationErrors;
        }
      });
  }
}
