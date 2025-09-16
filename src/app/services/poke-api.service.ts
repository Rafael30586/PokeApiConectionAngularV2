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
  private currentPokemonData$?: BehaviorSubject<IPokemon>

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
    return this.currentPokemonData$?.asObservable()
  }

  public setCurrentPokemonData(pokemonData: IPokemon){
    this.currentPokemonData$?.next(pokemonData)
  }

}
