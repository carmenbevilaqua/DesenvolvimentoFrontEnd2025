import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h2>Bem-vindo ao sistema!</h2>
    <button routerLink="/sobre">Sobre</button>
    <button routerLink="/contato">Contato</button>
  `
})
export class HomeComponent {}
