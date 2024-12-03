export interface Pokemon {
  name: string;
  sprites: PokemonResult['sprites'];
  url: string;
}

export interface PokemonListResponse {
  name: string;
  url: string;
}

export interface PokemonResult {
  name: string;
  url: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
