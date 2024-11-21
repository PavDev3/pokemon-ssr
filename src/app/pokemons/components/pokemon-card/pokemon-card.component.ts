import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from './../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card',
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>({ alias: 'pokemon' });
}
