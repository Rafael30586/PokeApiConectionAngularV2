import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon'
  private currentPokemon: string
  private currentPokemonData$: BehaviorSubject<IPokemon> = new BehaviorSubject<IPokemon>({
    id: 0,
    name: ' ',
    height: 0,
    weight: 0,
    types: [
      
    ],
    sprites: {
      front_default: ' ',
      back_default: ' '
    },
    stats: [
      {
        base_stat: 0,
        stat: {
          name: ' '
        }
      }
    ]

  })
  private typesQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(1)

  constructor(private httpClient: HttpClient) {
    this.currentPokemon = String(Math.floor(Math.random() * 1000) + 1)
   }

  public getPokemon(nameOrId: string): Observable<IPokemon>{
    return this.httpClient.get<IPokemon>(`${this.baseUrl}/${nameOrId}`)
  }

  public setCurrentPokemon(idOrName: string){
    this.currentPokemon = idOrName
  }

  public getCurrentPokemon(){
    return this.currentPokemon
  }

  public getCurrentPokemonData(){
    return this.currentPokemonData$.asObservable()
  }

  public setCurrentPokemonData(pokemonData: IPokemon){
    this.currentPokemonData$.next(pokemonData)
  }

  public getTypesQuantity(){
    return this.typesQuantity$.asObservable()
  }

  public setTypesQuantity(typesQuantity: number){
    this.typesQuantity$.next(typesQuantity)
  }

}
