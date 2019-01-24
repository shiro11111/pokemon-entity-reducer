import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PokemonService } from './pokemon.service';
import { map, switchMap } from 'rxjs/operators';
import { NormalizedPokemonList } from '../models/normalizedPokemonList';
import { LoadPokemonListSuccess } from './pokemon.actions';

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions,
              private service: PokemonService) {
  }

  @Effect() loadPokemonList$ = this.actions$.pipe(
    ofType('LOAD_POKEMON_LIST'),
    switchMap(() => this.service.loadPokemonList().pipe(
      map((res: NormalizedPokemonList) => (new LoadPokemonListSuccess(res)))
    ))
  );
}
