import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app-reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getStateEntity } from '../store/entity/entity.selector';
import { Pokemon } from '../store/models/pokemon';
import { LoadPokemonList } from '../store/pokemon/pokemon.actions';
import { getPokemonListData } from '../store/pokemon/pokemon.selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList$: Observable<Pokemon[]>;
  entities$: Observable<{ [key: string]: any }>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.entities$ = this.store.pipe(select(getStateEntity));

    this.pokemonList$ = this.store.pipe(select(getPokemonListData));

    this.store.dispatch(new LoadPokemonList());
  }
}
