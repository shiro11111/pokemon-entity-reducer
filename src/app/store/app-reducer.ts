import * as fromPokemonState from './pokemon/pokemon.reducer';
import * as fromEntitiesState from './entity/entity.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { pokemonReducer } from './pokemon/pokemon.reducer';
import { entityReducer } from './entity/entity.reducer';

export interface AppState {
  pokemonState: fromPokemonState.PokemonState;
  entitiesState: fromEntitiesState.EntitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  pokemonState: pokemonReducer,
  entitiesState: entityReducer

};

export const getPokemonState = (state: AppState) => state.pokemonState;
export const getEntityState = (state: AppState) => state.entitiesState;
