import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent {

  darkTheme?: boolean

  constructor(private themeService: ThemeService){

  }

  ngOnInit(): void {
    this.themeService.getDarkTheme().subscribe(data =>{
      this.darkTheme = data
    })
  }

}
