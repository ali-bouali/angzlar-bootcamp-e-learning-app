import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainComponent } from './pages/main/main.component';
import {AppCommonModule} from '../app-common/app-common.module';
import { SubjectListComponent } from './pages/subject-list/subject-list.component';


@NgModule({
  declarations: [
    MainComponent,
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AppCommonModule
  ]
})
export class StudentModule { }
