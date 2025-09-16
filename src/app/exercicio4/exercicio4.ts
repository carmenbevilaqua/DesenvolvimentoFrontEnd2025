import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio4',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.css',
})
export class Exercicio4 {
  n1: number | null = null;
  n2: number | null = null;
  n3: number | null = null;

  mediaAritmetica: number | null = null;
  mediaPonderada: number | null = null;
  somaMedias: number | null = null;
  mediaDasMedias: number | null = null;

  calcular() {
    let n1 = Number(this.n1);
    let n2 = Number(this.n2);
    let n3 = Number(this.n3);

    this.mediaAritmetica = (n1 + n2 + n3) / 3;
    this.mediaPonderada = (n1 * 3 + n2 * 2 + n3 * 5) / 10;
    this.somaMedias = this.mediaAritmetica + this.mediaPonderada;
    this.mediaDasMedias = this.somaMedias / 2;
  }
}
