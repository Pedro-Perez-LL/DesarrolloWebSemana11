import { Routes } from '@angular/router';
import { SobreNosotros } from './views/sobre-nosotros/sobre-nosotros';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-nosotros', component: SobreNosotros }
];