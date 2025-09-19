import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRotationButton]'
})
export class RotationButtonDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-rotation-button')
    else this.elementRef.nativeElement.classList.remove('dark-rotation-button')
  }

}
