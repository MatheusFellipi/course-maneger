import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, char: string, valueToReplaces: string) {
    return value.replace(char, valueToReplaces);
  }
}
