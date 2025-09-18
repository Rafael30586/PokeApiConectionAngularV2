import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSectionTheme]'
})
export class SectionThemeDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-section')
    else this.elementRef.nativeElement.classList.remove('dark-section')
  }

}
