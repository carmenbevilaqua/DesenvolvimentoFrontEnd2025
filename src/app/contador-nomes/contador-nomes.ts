import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador-nomes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contador-nomes.html',
  styleUrl: './contador-nomes.css',
})
export class ContadorNomes {
  nome: string = '';
  nomes: string[] = [];

  adicionarNome() {
    if (this.nome.trim() !== '') {
      this.nomes.push(this.nome.trim());
      this.nome = '';
    }
  }

  removerNome(index: number) {
    this.nomes.splice(index, 1);
  }

  get totalNomes(): number {
    return this.nomes.length;
  }
}
