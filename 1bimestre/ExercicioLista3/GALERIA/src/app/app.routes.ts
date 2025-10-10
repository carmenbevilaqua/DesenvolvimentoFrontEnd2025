import { Routes } from '@angular/router';
import { DetalheImagemComponent } from './detalhe-imagem-component/detalhe-imagem-component';
import { GaleriaComponent } from './galeria-component/galeria-component';

export const routes: Routes = [
  { path: 'detalhe', component: DetalheImagemComponent },
  { path: 'galeria', component: GaleriaComponent },

  { path: '', redirectTo: 'galeria', pathMatch: 'full' },
];
