import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {

  pokemonData$: Observable<IPokemon>

  constructor(private pokeApiService: PokeApiService){
    this.pokemonData$ = pokeApiService.getCurrentPokemonData()
  }

}
