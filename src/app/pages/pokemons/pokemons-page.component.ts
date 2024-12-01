import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  resource,
  signal,
} from '@angular/core';
import { PokemonCardComponent } from '../../pokemons/components/pokemon-card/pokemon-card.component';
import {
  Pokemon,
  PokemonListResponse,
} from '../../pokemons/interfaces/pokemon.interface';

@Component({
  selector: 'pokemons-page',
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsComponent {
  public offset = signal(0);
  public pokemonList = signal<Pokemon[]>([]);
  public isLoading = signal(false);
  public totalPages = 60;

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

  constructor() {
    effect(() => {
      const newPokemons = this.pokemonListResource.value();
      if (newPokemons) {
        this.pokemonList.set(newPokemons);
      }
    });
  }

  nextPage() {
    this.offset.update((current) => current + 21);
  }

  previousPage() {
    if (this.offset() > 0) {
      this.offset.update((current) => current - 21);
    }
  }

  getPages(): number[] {
    const currentPage = this.offset() / 21 + 1;
    const pages: number[] = [];

    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(this.totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(page: number) {
    this.offset.set((page - 1) * 21);
  }
}
