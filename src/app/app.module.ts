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

import { BodyThemeDirective } from './directives/body-theme.directive';
import { HeaderThemeDirective } from './directives/header-theme.directive';
import { SubmitButtonThemeDirective } from './directives/submit-button-theme.directive';
import { InputThemeDirective } from './directives/input-theme.directive';
import { ThemeButtonThemeDirective } from './directives/theme-button-theme.directive';
import { SectionThemeDirective } from './directives/section-theme.directive';
import { DataThemeDirective } from './directives/data-theme.directive';
import { HowToComponent } from './how-to/how-to.component';
import { TitleSectionDirective } from './directives/title-section.directive';
import { PokemonNameDirective } from './directives/pokemon-name.directive';
import { SubtitleDirective } from './directives/subtitle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    BaseStatsComponent,
    ImagesComponent,
    SecondTypePipe,
    RemoveMiddleDashPipe,
    BodyThemeDirective,
    HeaderThemeDirective,
    SubmitButtonThemeDirective,
    InputThemeDirective,
    ThemeButtonThemeDirective,
    SectionThemeDirective,
    DataThemeDirective,
    HowToComponent,
    TitleSectionDirective,
    PokemonNameDirective,
    SubtitleDirective
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
