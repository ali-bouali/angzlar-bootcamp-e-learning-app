import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        TranslateModule
    ]
})
export class AppCommonModule { }
