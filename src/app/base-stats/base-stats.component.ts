import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';
import { PokeApiService } from '../services/poke-api.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.css']
})
export class BaseStatsComponent implements OnInit{

  pokemonData$: Observable<IPokemon>
  darkTheme?: boolean
  
    constructor(private pokeApiService: PokeApiService, private themeService: ThemeService){
      this.pokemonData$ = pokeApiService.getCurrentPokemonData()
    }

  ngOnInit(): void {
    this.themeService.getDarkTheme().subscribe(data =>{
      this.darkTheme = data 
    })
  }
  

}
