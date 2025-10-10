import { Routes } from '@angular/router';
import { DetalheProdutoComponent } from './detalhe-produto-component/detalhe-produto-component';
import { ProdutoComponent } from './produto-component/produto-component';

export const routes: Routes = [
  { path: 'detalhe', component: DetalheProdutoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: '', redirectTo: 'produto', pathMatch: 'full' },
];
