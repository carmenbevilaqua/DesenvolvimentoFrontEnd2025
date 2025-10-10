import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  template: `<h2>Sobre esse sistema</h2>
  <button routerLink="/home">Home</button>
`,
})
export class SobreComponent {}
