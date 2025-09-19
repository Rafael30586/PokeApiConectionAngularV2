import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImageOrientation]'
})
export class ImageOrientationDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-image-orientation')
    else this.elementRef.nativeElement.classList.remove('dark-image-orientation')
  }

}
