import { Routes } from '@angular/router';

export const routes: Routes = [
  // AGREGAR LAS DEMAS RUTAS :D)
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then(m => m.ContactoComponent)
  }
];