import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  template: `<h2>Página de Contato</h2>
  <button routerLink="/home">Home</button>
  `
})
export class ContatoComponent {}
