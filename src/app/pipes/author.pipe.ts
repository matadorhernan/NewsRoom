import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      return value;
    } else {
      return 'Anonymous';
    }
  }

}
