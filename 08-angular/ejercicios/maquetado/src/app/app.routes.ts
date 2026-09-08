import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Contacto } from './pages/contacto/contacto';


export const routes: Routes = [
  {
    path: 'landing',
    component: LandingPage,
  },
  {
    path: 'contacto',
    component: Contacto,
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full',
  }
];
