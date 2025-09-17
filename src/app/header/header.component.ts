import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private pokeApiService: PokeApiService){

    this.formGroup = this.formBuilder.group({
      idOrName: ''
    })

  }

  onSubmit(e: Event){
    e.preventDefault()
    this.pokeApiService.getPokemon(this.formGroup.value.idOrName).subscribe({
      next: (data) =>{
        this.pokeApiService.setCurrentPokemonData(data)
        console.log(data)
      },
      error: (error: any) => {
        alert('The id or name is incorrect. Try a different value.')
      }
    }
    )
  }
}
