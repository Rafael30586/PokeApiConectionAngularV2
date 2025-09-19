import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIconThemeButton]'
})
export class IconThemeButtonDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.setAttribute("src","../../assets/moon-fill.svg")
    else this.elementRef.nativeElement.setAttribute("src","../../assets/sun-fill.svg")
  }

}
