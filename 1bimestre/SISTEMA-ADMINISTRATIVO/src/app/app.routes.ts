import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { DetalheUsuarioComponent } from './detalhe-usuario-component/detalhe-usuario-component';
import { EstoqueComponent } from './estoque-component/estoque-component';
import { RelatoriosComponent } from './relatorios-component/relatorios-component';
import { UsuariosComponent } from './usuarios-component/usuarios-component';
import { VendasComponent } from './vendas-component/vendas-component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalheUsuario', component: DetalheUsuarioComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'vendas', component: VendasComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]
