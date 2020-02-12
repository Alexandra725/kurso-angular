import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorate', pure: true
})
export class DecoratePipe implements PipeTransform {

  transform(value: string, dec: string): string {
    return dec + value + dec;
  }

}
