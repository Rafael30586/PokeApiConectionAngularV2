import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPokemonName]'
})
export class PokemonNameDirective implements DoCheck{

  @Input() darkTheme?: boolean

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
    if(this.darkTheme) this.elementRef.nativeElement.classList.add('dark-pokemon-name')
    else this.elementRef.nativeElement.classList.remove('dark-pokemon-name')
  }

}
