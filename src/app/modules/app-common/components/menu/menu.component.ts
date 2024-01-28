import {Component, Input} from '@angular/core';
import {MenuItem} from './menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  get items(): MenuItem[] {
    return this._items;
  }

  @Input()
  set items(value: MenuItem[]) {
    this._items = value;
  }


  private _items: MenuItem[] = [];
}
