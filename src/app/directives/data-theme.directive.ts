import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDataTheme]'
})
export class DataThemeDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-data')
    else this.elementRef.nativeElement.classList.remove('dark-data')
  }

}
