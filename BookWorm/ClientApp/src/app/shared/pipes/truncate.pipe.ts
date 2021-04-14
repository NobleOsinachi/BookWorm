import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitChar',
})
export class TruncatePipe implements PipeTransform {
  //⁇
  transform(input: string, limit: number) {
    //if (input)
    return input.length >= length ? input.substring(0, limit) + '...' : input;
  }
}
