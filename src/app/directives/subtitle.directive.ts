import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSubtitle]'
})
export class SubtitleDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  
  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-subtitle')
    else this.elementRef.nativeElement.classList.remove('dark-subtitle')
  }


}
