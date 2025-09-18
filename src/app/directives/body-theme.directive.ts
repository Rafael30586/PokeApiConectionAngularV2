import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBodyTheme]'
})
export class BodyThemeDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) {
    
   }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-body')
    else this.elementRef.nativeElement.classList.remove('dark-body')
  }

}
