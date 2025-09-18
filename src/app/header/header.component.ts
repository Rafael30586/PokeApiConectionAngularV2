import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokeApiService } from '../services/poke-api.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  formGroup: FormGroup
  darkTheme: boolean 

  constructor(private formBuilder: FormBuilder, private pokeApiService: PokeApiService, private themeService: ThemeService){

    this.formGroup = this.formBuilder.group({
      idOrName: ''
    })
    this.darkTheme = false
  }

  onSubmit(e: Event){
    e.preventDefault()
    this.pokeApiService.getPokemon(this.formGroup.value.idOrName).subscribe({
      next: (data) =>{
        this.pokeApiService.setCurrentPokemonData(data)
        // console.log(data)
      },
      error: (error: any) => {
        alert('The id or name is incorrect. Try a different value.')
      }
    }
    )
  }

  changeTheme(){
    if(this.darkTheme === false){
      this.darkTheme = true
    }
    else{
      this.darkTheme = false
    } 
    this.themeService.setDarkTheme(this.darkTheme)
    console.log('Dark theme from header:',this.darkTheme)
  }
}
