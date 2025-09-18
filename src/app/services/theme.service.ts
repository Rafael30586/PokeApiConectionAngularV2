import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { 
    
  }

  

  public getDarkTheme(){
    return this.darkTheme$.asObservable()
  }

  public setDarkTheme(darkTheme: boolean){
    this.darkTheme$.next(darkTheme)
  }
}
