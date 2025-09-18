import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputTheme]'
})
export class InputThemeDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-input')
    else this.elementRef.nativeElement.classList.remove('dark-input')
  }

}
