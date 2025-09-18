import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTitleSection]'
})
export class TitleSectionDirective implements DoCheck{

  @Input() darkTheme?: boolean
  
    constructor(private elementRef: ElementRef) { }

    ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-title-section')
    else this.elementRef.nativeElement.classList.remove('dark-title-section')
  }

}
