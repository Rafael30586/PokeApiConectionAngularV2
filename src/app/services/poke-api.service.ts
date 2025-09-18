import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon'
  private currentPokemonData$: BehaviorSubject<IPokemon> = new BehaviorSubject<IPokemon>({
    id: 81,
    name: 'magnemite',
    height: 3,
    weight: 60,
    types: [
      {type: { name: 'electric'}},
      {type: {name: 'steel'}}
    ],
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png'
    },
    stats: [
      {
        base_stat: 25,
        stat: {
          name: 'hp'
        }
      },
      {
        base_stat: 35,
        stat: {
          name: 'attack'
        }
      },
      {
        base_stat: 70,
        stat: {
          name: 'defense'
        }
      },
      {
        base_stat: 95,
        stat: {
          name: 'special-attack'
        }
      },
      {
        base_stat: 55,
        stat: {
          name: 'special-defense'
        }
      },
      {
        base_stat: 45,
        stat: {
          name: 'speed'
        }
      }
    ]

  })
  

  constructor(private httpClient: HttpClient) {

   }

  public getPokemon(nameOrId: string): Observable<IPokemon>{
    return this.httpClient.get<IPokemon>(`${this.baseUrl}/${nameOrId}`)
  }

  public getCurrentPokemonData(){
    return this.currentPokemonData$.asObservable()
  }

  public setCurrentPokemonData(pokemonData: IPokemon){
    this.currentPokemonData$.next(pokemonData)
  }


}
