import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.css']
})
export class BaseStatsComponent {

  pokemonData$: Observable<IPokemon>
  
    constructor(private pokeApiService: PokeApiService){
      this.pokemonData$ = pokeApiService.getCurrentPokemonData()
    }
  

}
