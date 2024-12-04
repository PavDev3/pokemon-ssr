import { Injectable, resource, signal } from '@angular/core';
import {
  Pokemon,
  PokemonListResponse,
  PokemonResult,
} from '../interfaces/pokemons.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  public offset = signal(0);
  public pokemonList = signal<Pokemon[]>([]);
  public isLoading = signal(false);
  public totalPages = 60;
  public pokemonResult = signal<PokemonResult | null>(null);

  pokemonListResource = resource({
    request: this.offset,
    loader: ({ request: offset }) =>
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offset}`)
        .then((res) => res.json())
        .then((data) =>
          data.results.map((pokemon: PokemonListResponse) => ({
            name: pokemon.name,
            url: pokemon.url,
          }))
        ),
  });

  pokemonDetailResource = resource({
    request: this.pokemonResult,
    loader: async ({ request: pokemon }) => {
      console.log('Pokemon URL:', pokemon?.url);
      return fetch(pokemon?.url ?? '')
        .then((res) => res.json())
        .then((data: PokemonResult) => {
          console.log('Pokemon Details:', data);
          return {
            name: data.name,
            url: data.url,
            sprites: data.sprites,
          };
        });
    },
  });
}
