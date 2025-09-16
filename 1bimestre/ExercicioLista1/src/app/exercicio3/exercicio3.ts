import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio3.html',
  styleUrls: ['./exercicio3.css']
})
export class Exercicio3 {
  saldo: number | null = null
  saldoReajustado: number | null = null;

  calcularReajuste(){
    let n1 = Number (this.saldo);
    let n2 = 1.01;

    this.saldoReajustado = n1 * n2;
  }
}
