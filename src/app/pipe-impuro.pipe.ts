import { Pipe, PipeTransform } from '@angular/core';
import { FilterArrayPipe } from './filter-array.pipe';

@Pipe({
  name: 'pipeImpuro',
  pure: false
})
export class PipeImpuroPipe extends FilterArrayPipe {


}
