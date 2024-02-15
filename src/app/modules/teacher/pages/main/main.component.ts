import { Component } from '@angular/core';
import {MenuItem} from '../../../app-common/components/menu/menu-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  menuItems: MenuItem[] = [
    {
      label: 'MENU.TEACHER.HOME',
      url: 'home'
    },
    {
      label: 'MENU.TEACHER.SUBJECTS',
      url: 'subjects'
    },
    {
      label: 'MENU.TEACHER.STUDENTS',
      url: 'my-students'
    }
  ];
}
