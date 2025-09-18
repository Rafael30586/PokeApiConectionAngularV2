import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSubmitButtonTheme]'
})
export class SubmitButtonThemeDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-submit-button')
    else this.elementRef.nativeElement.classList.remove('dark-submit-button')
  }

}
