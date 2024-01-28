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
      label: 'Home',
      url: 'home'
    }
  ]
}
