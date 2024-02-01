import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ManageSubjectComponent } from './pages/manage-subject/manage-subject.component';
import { MainComponent } from './pages/main/main.component';
import {AppCommonModule} from '../app-common/app-common.module';


@NgModule({
  declarations: [
    ManageSubjectComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    AppCommonModule
  ]
})
export class TeacherModule { }
