import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortWords'
})
export class SortWordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 'publishedAt') {
      return value = 'Recent';
    }

    return value;
  }

}
