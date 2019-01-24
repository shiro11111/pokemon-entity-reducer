import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { reducers } from './store/app-reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PokemonService } from './store/pokemon/pokemon.service';
import { PokemonEffects } from './store/pokemon/pokemon.effects';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      PokemonEffects
    ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
