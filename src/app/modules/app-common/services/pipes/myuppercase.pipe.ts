import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myuppercase'
})
export class MyuppercasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value) {
      return '--' + value.toUpperCase() + '--';
    }
    return value;
  }

}
