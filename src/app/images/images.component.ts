import { Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';
import { PokeApiService } from '../services/poke-api.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, DoCheck{

  pokemonData$: Observable<IPokemon>
  frontPicture: boolean = true
  darkTheme?: boolean

  constructor(private pokeApiService: PokeApiService, private themeService: ThemeService) {
    this.pokemonData$ = pokeApiService.getCurrentPokemonData()
  }

  ngDoCheck(): void {
    //console.log('Dark theme: ',this.darkTheme)
  }

  ngOnInit(): void {
    this.themeService.getDarkTheme().subscribe(data => {
      this.darkTheme = data
    })
  }

  changeImage() {
    if (this.frontPicture) this.frontPicture = false
    else this.frontPicture = true
  }


}
