export interface Pokemon {
  name: string;
  sprites: PokemonResult['sprites'];
  url: string;
  stats: PokemonStats[];
}

export interface PokemonListResponse {
  name: string;
  url: string;
}

export interface PokemonResult {
  name: string;
  url: string;
  stats: PokemonStats[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}
