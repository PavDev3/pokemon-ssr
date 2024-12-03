import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { PokemonCardComponent } from '../../pokemons/components/pokemon-card/pokemon-card.component';
import { Pokemon } from '../../pokemons/interfaces/pokemons.interface';
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
  selector: 'pokemons-page',
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsComponent {
  private pokemonsService = inject(PokemonsService);
  public offset = signal(0);
  public pokemonList = signal<Pokemon[]>([]);

  constructor() {
    effect(() => {
      const newPokemons = this.pokemonsService.pokemonListResource.value();
      if (newPokemons) {
        this.pokemonList.set(newPokemons);
      }
    });
  }

  nextPage() {
    this.pokemonsService.offset.update((current) => current + 21);
  }

  previousPage() {
    if (this.pokemonsService.offset() > 0) {
      this.pokemonsService.offset.update((current) => current - 21);
    }
  }

  getPages(): number[] {
    const currentPage = this.pokemonsService.offset() / 21 + 1;
    const pages: number[] = [];

    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(this.pokemonsService.totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(page: number) {
    this.pokemonsService.offset.set((page - 1) * 21);
  }
}
