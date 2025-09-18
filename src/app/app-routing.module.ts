import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ImagesComponent } from './images/images.component';
import { BaseStatsComponent } from './base-stats/base-stats.component';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [
  {path:'how-to',component: HowToComponent},
  {path:'general',component: GeneralComponent},
  {path:'images', component: ImagesComponent},
  {path:'base-stats', component: BaseStatsComponent},
  {path:'**', redirectTo:'how-to', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
