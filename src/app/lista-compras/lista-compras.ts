import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.css',
})
export class ListaCompras {
  produto: string = '';
  preco: number | null = null;
  compras: { nome: string; valor: number }[] = [];

  adicionarProduto() {
    if (this.produto && this.preco !== null && this.preco >= 0) {
      this.compras.push({ nome: this.produto, valor: this.preco });
      this.produto = '';
      this.preco = null;
    }
  }

  removerProduto(index: number) {
    this.compras.splice(index, 1);
  }

  get valorTotal(): number {
    return this.compras.reduce((total, item) => total + item.valor, 0);
  }
}
