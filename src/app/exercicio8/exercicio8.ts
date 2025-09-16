import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio8',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio8.html',
  styleUrls: ['./exercicio8.css'],
})
export class Exercicio8 {
  numero: string = '';
  produto: string = '';

  verificarProduto() {
    const codigo = this.numero.trim();

    if (codigo === '001') {
      this.produto = 'Parafuso';
    } else if (codigo === '002') {
      this.produto = 'Porca';
    } else if (codigo === '003') {
      this.produto = 'Prego';
    } else {
      this.produto = 'Diversos';
    }
  }
}
