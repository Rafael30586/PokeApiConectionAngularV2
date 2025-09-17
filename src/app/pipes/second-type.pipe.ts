import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondType'
})
export class SecondTypePipe implements PipeTransform {

  transform(secondType: string | undefined): string {
    if(secondType !== null) return `/ ${secondType}`
    else return ""
  }

}
