import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.css',
})
export class Exercicio1 {
  valorpago: number | null = null;
  precoproduto: number | null = null;
  resultado: number | null = null;

  calcularTroco() {
    let n1 = Number(this.valorpago);
    let n2 = Number(this.precoproduto);
    this.resultado = n1 - n2;
  }
}
