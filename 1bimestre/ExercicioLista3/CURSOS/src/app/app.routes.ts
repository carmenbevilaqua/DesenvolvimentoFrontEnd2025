import { Routes } from '@angular/router';
import { CursosComponent } from './cursos-component/cursos-component';
import { DetalheCursoComponent } from './detalhe-curso-component/detalhe-curso-component';
import { DetalheProfessorComponent } from './detalhe-professor-component/detalhe-professor-component';
import { HomeComponent } from './home-component/home-component';
import { ProfessoresComponent } from './professores-component/professores-component';

export const routes: Routes = [
  { path:'cursos', component: CursosComponent },
  { path: 'detalheCurso', component: DetalheCursoComponent },
  { path: 'detalheProfessor', component: DetalheProfessorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'professores', component: ProfessoresComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
]
