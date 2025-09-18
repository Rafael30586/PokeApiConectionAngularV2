import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appThemeButtonTheme]'
})
export class ThemeButtonThemeDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-theme-button')
    else this.elementRef.nativeElement.classList.remove('dark-theme-button')
  }

}
