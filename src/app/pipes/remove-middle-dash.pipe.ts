import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeMiddleDash'
})
export class RemoveMiddleDashPipe implements PipeTransform {

  withoutMiddleDash: string = ''

  transform(value: string | undefined): string | undefined{
    if(value !== undefined) this.withoutMiddleDash = value.replace("-"," ")
    else return ' '
    return this.withoutMiddleDash
  }

}
