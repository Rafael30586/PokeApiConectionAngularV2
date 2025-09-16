import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: number 

  constructor() { 
    this.currentTheme = 0
  }

  changeTheme(){
    if(this.currentTheme === 0) this.currentTheme = 1
    else this.currentTheme = 0
  }
}
