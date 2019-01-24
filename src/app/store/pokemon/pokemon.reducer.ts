import { LOAD_POKEMON_LIST, LOAD_POKEMON_LIST_FAIL, LOAD_POKEMON_LIST_SUCCESS, PokemonActions } from './pokemon.actions';

export interface PokemonState {
  list: number[];
}

const initialState: PokemonState = {
  list: []
};

export function pokemonReducer(state = initialState, action: PokemonActions){
  switch (action.type) {
    case LOAD_POKEMON_LIST:
      return {
        ...state
      };
    case LOAD_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload.result
      };
    case LOAD_POKEMON_LIST_FAIL:
      return {
        ...state
      };
  }
}

export const getPokemonList = (state: PokemonState) => state.list;
