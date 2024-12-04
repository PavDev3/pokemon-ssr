import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemons.interface';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsComponent {
  private router = inject(Router);
  protected pokemonsService = inject(PokemonsService);
  public pokemon = signal<Pokemon | null>(null);

  constructor() {
    effect(() => {
      this.pokemon.set(this.pokemonsService.pokemonResult());
    });
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  getStatPercentage(baseStat: number): number {
    const MAX_STAT = 200;
    return Math.min((baseStat / MAX_STAT) * 100, 100);
  }

  getStatColor(baseStat: number): string {
    if (baseStat >= 150) return 'bg-red-500';
    if (baseStat >= 100) return 'bg-orange-500';
    if (baseStat >= 70) return 'bg-blue-500';
    return 'bg-blue-400';
  }
}
