import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PokemonUtil } from '../shared/pokemon.util';
import { Pokemon } from '../models/pokemon';
import { List } from '../models/list';
import { map } from 'rxjs/operators';
import { normalize } from 'normalizr';
import { pokemon } from '../entity/schemas';
import { NormalizedPokemonList } from '../models/normalizedPokemonList';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  loadPokemonList(): Observable<NormalizedPokemonList> {
    return of(PokemonUtil.getPokemonList()).pipe(
      map((list: List<Pokemon>) => list && list.list as Pokemon[]),
      map((list: Pokemon[]) => normalize(list, [pokemon]))
    );
  }
}
