import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  resource,
} from '@angular/core';
import { PokemonListSkeletonComponent } from '../ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { Pokemon, PokemonResult } from './../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card',
  imports: [CommonModule, PokemonListSkeletonComponent],
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>({ alias: 'pokemon' });

  public pokemonResource = resource({
    request: this.pokemon,
    loader: ({ request: pokemon, abortSignal }) =>
      fetch(pokemon.url, { signal: abortSignal })
        .then((res) => res.json())
        .then((data: PokemonResult) => ({
          name: data.name,
          sprites: data.sprites,
        })),
  });
}
