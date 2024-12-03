import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons',
    loadComponent: () =>
      import('./pages/pokemons/pokemons-page.component').then(
        (m) => m.PokemonsComponent
      ),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () =>
      import(
        './pokemons/components/pokemon-details/pokemon-details.component'
      ).then((m) => m.PokemonDetailsComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact-page.component').then(
        (m) => m.ContactPageComponent
      ),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/404/404/page-404.component').then(
        (m) => m.Page404Component
      ),
  },
  {
    path: '**',
    redirectTo: 'pokemons',
  },
];
