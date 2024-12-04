import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  resource,
} from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, PokemonResult } from '../../interfaces/pokemons.interface';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonListSkeletonComponent } from '../ui/pokemon-list-skeleton/pokemon-list-skeleton.component';

@Component({
  selector: 'pokemon-card',
  imports: [CommonModule, PokemonListSkeletonComponent],
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  private router = inject(Router);
  private pokemonsService = inject(PokemonsService);

  pokemon = input.required<Pokemon>();

  public pokemonResource = resource({
    request: this.pokemon,
    loader: ({ request: pokemon }) =>
      fetch(pokemon.url)
        .then((res) => res.json())
        .then((data: PokemonResult) => ({
          name: data.name,
          sprites: data.sprites,
          url: data.url,
          stats: data.stats,
        })),
  });

  async onPokemonClick() {
    const pokemonData = this.pokemonResource.value();
    if (pokemonData) {
      this.pokemonsService.pokemonResult.set(pokemonData);
      await this.router.navigate(['/pokemons', pokemonData.name]);
    }
  }
}
