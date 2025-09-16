import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-numeros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-numeros.html',
  styleUrl: './lista-numeros.css',
})
export class ListaNumeros {
  numero: number | null = null;
  numeros: number[] = [];
  soma: number = 0;
  media: number = 0;

  adicionarNumero() {
    if (this.numero !== null) {
      this.numeros.push(this.numero);
      this.atualizarSomaEMedia();
      this.numero = null;
    }
  }
  removerNumero(index: number) {
    this.numeros.splice(index, 1);
    this.atualizarSomaEMedia();
  }
  atualizarSomaEMedia() {
    if (this.numeros.length > 0) {
      this.soma = this.numeros.reduce((a, b) => a + b, 0);
      this.media = this.soma / this.numeros.length;
    } else {
      this.soma = 0;
      this.media = 0;
    }
  }
}
