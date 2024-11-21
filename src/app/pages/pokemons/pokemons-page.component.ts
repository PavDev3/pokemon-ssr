import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCardComponent } from '../../pokemons/components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'pokemons-page',
  imports: [CommonModule, PokemonListComponent, PokemonCardComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsComponent {}
