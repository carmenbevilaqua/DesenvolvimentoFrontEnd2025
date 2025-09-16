import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exercicio2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio2.html',
  styleUrl: './exercicio2.css'
})
export class Exercicio2 {
  valorQuilo: number | null = null;
  quantidade: number | null = null;
  total: number | null = null;

  calcularValor(){
    let n1 = Number (this.valorQuilo)
    let n2 = Number (this.quantidade)
    
    this.total = n1 * n2;
  }
}
