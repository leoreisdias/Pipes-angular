import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args;
    return value.filter(
      v => v.indexOf(filter) != -1
    )

  }

}
