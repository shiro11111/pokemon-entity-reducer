import { Pokemon } from '../models/pokemon';
import { List } from '../models/list';

export class PokemonUtil {
  static getPokemonList(): List<Pokemon> {
    return {
      totalCount: 5,
      list: [
        {
          id: 1,
          name: 'Pikachu',
          color: 'yellow',
          type: 'electric',
          owner: 'Ash'
        },
        {
          id: 2,
          name: 'Charmander',
          color: 'orange',
          type: 'fire',
          owner: 'Ash'
        },
        {
          id: 3,
          name: 'Squirtle',
          color: 'blue',
          type: 'water',
          owner: 'Ash'
        },
        {
          id: 4,
          name: 'Psyduck',
          color: 'yellow',
          type: 'psychic',
          owner: 'Misty'
        },
        {
          id: 5,
          name: 'Onyx',
          color: 'grey',
          type: 'stone',
          owner: 'Brock'
        }
      ]
    };
  }
}
