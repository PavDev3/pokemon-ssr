import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/about/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing-page.component').then(
        (m) => m.PricingPageComponent
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
    redirectTo: '',
  },
];
