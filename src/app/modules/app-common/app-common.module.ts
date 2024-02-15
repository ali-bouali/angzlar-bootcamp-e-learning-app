import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { MyuppercasePipe } from './services/pipes/myuppercase.pipe';



@NgModule({
  declarations: [
    MenuComponent,
    MyuppercasePipe
  ],
  exports: [
    MenuComponent,
    MyuppercasePipe
  ],
    imports: [
        CommonModule,
        RouterLink,
        TranslateModule
    ]
})
export class AppCommonModule { }
