import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit{

  pokemonData$: Observable<IPokemon>
  frontPicture: boolean = true
  frontImage: string = ''
  backImage: string = ''
  
    constructor(private pokeApiService: PokeApiService){
      this.pokemonData$ = pokeApiService.getCurrentPokemonData()
    }

  ngOnInit(): void {
    this.pokemonData$.subscribe((data)=>{
      this.frontImage = data.sprites.front_default
      this.backImage = data.sprites.back_default
    })
  }

  changeImage(){
    if(this.frontPicture) this.frontPicture = false
    else this.frontPicture = true
  }



}
