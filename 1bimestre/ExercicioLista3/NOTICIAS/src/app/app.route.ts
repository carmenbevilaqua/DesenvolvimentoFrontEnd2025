import { Routes } from '@angular/router';
import { NoticiasComponent } from './noticias-component/noticias-component';
import { DetalhesNoticia } from './detalhes-noticia/detalhes-noticia';

export const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detalhe', component: DetalhesNoticia },

  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
];
