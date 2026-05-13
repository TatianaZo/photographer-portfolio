import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LegalPageComponent } from './pages/legal/legal-page/legal-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal/:id', component: LegalPageComponent },
  { path: '**', redirectTo: '' },
];
