import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { PokemonDetail } from '../../interfaces/pokemon.model.ts';
import { PokemonsService } from '../../services/pokemons.service.js';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon = signal<PokemonDetail | null>(null);
  private pokemonsService = inject(PokemonsService);

  ngOnInit(): void {}
}
