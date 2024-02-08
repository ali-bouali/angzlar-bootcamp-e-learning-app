import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {SubjectListComponent} from './pages/subject-list/subject-list.component';
import {ManageSubjectComponent} from './pages/manage-subject/manage-subject.component';
import {DemoPageComponent} from './pages/demo-page/demo-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'subjects',
        component: SubjectListComponent
      },
      {
        path: 'subjects/manage',
        component: ManageSubjectComponent
      },
      {
        path: 'subjects/manage/:subjectId',
        component: ManageSubjectComponent
      },
      {
        path: 'my-demo-page',
        component: DemoPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
