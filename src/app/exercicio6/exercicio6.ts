import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio6',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.css',
})
export class Exercicio6 {
  n1: number | null = null;
  n2: number | null = null;
  n3: number | null = null;
  n4: number | null = null;
  menor: number | null = null;

  calcularMenor() {
    if (
      this.n1 !== null &&
      this.n2 !== null &&
      this.n3 !== null &&
      this.n4 !== null
    ) {
      this.menor = Math.min(this.n1, this.n2, this.n3, this.n4);
    }
  }
}
