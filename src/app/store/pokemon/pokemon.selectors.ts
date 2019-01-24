import { createSelector } from '@ngrx/store';
import { getPokemonState } from '../app-reducer';
import * as fromReducer from './pokemon.reducer';
import { getStateEntity } from '../entity/entity.selector';
import { denormalize } from 'normalizr';
import { pokemon } from '../entity/schemas';

export const getStatePokemon = createSelector(getPokemonState, fromReducer.getPokemonList);

export const getPokemonListData = createSelector(
  getStateEntity,
  getStatePokemon,
  (entities: {[key: string]: any}, pokemonIds: number[]) => denormalize(pokemonIds, [pokemon], entities)
);
