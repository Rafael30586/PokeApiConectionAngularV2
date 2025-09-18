import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHeaderTheme]'
})
export class HeaderThemeDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-header')
    else this.elementRef.nativeElement.classList.remove('dark-header')
  }

}
