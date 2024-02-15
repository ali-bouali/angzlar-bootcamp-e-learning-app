import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ManageSubjectComponent } from './pages/manage-subject/manage-subject.component';
import { MainComponent } from './pages/main/main.component';
import {AppCommonModule} from '../app-common/app-common.module';
import { SubjectListComponent } from './pages/subject-list/subject-list.component';
import {FormsModule} from '@angular/forms';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { ListComponent } from './pages/demo-page/components/list/list.component';
import { FormComponent } from './pages/demo-page/components/form/form.component';
import { List2Component } from './pages/demo-page/components/list2/list2.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    ManageSubjectComponent,
    MainComponent,
    SubjectListComponent,
    DemoPageComponent,
    ListComponent,
    FormComponent,
    List2Component
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    AppCommonModule,
    FormsModule,
    TranslateModule
  ]
})
export class TeacherModule { }
