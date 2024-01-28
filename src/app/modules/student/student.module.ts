import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainComponent } from './pages/main/main.component';
import {AppCommonModule} from '../app-common/app-common.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AppCommonModule
  ]
})
export class StudentModule { }
