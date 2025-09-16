import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio7',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio7.html',
  styleUrls: ['./exercicio7.css'],
})
export class Exercicio7 {
  numero: number = 0;
  resultado: string = '';

  verificarImpar() {
    if (this.numero % 2 !== 0) {
      this.resultado = 'O número é ímpar';
    } else {
      this.resultado = 'O número não é ímpar';
    }
  }
}
