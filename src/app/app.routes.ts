import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PortefolioComponent } from './routes/portefolio/portefolio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portefolio', component: PortefolioComponent},
];
