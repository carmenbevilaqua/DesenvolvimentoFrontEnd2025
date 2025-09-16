import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio5',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio5.html',
  styleUrl: './exercicio5.css',
})
export class Exercicio5 {
  n1: number | null = null;
  n2: number | null = null;
  maior: number | null = null;

  calcularMaior() {
    if (this.n1 !== null && this.n2 !== null) {
      this.maior = this.n1 > this.n2 ? this.n1 : this.n2;
    }
  }
}
