import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ManageSubjectComponent } from './pages/manage-subject/manage-subject.component';
import { MainComponent } from './pages/main/main.component';
import {AppCommonModule} from '../app-common/app-common.module';
import { SubjectListComponent } from './pages/subject-list/subject-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ManageSubjectComponent,
    MainComponent,
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    AppCommonModule,
    FormsModule
  ]
})
export class TeacherModule { }
