import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ImagesComponent } from './images/images.component';
import { BaseStatsComponent } from './base-stats/base-stats.component';

const routes: Routes = [
  {path:'general',component: GeneralComponent},
  {path:'images', component: ImagesComponent},
  {path:'base-stats', component: BaseStatsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
