import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GeneralComponent } from './general/general.component';
import { BaseStatsComponent } from './base-stats/base-stats.component';
import { ImagesComponent } from './images/images.component';
import {HttpClientModule} from '@angular/common/http' 
import { ReactiveFormsModule } from '@angular/forms';
import { SecondTypePipe } from './pipes/second-type.pipe';
import { RemoveMiddleDashPipe } from './pipes/remove-middle-dash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    BaseStatsComponent,
    ImagesComponent,
    SecondTypePipe,
    RemoveMiddleDashPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
