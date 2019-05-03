import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'content'
})
export class ContentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let parts = value.split('[');
    console.log(parts);
    return parts[0];
  }

}
