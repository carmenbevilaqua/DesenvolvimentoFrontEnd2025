import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Exercicio1 } from './app/exercicio1/exercicio1';
import { Exercicio2 } from './app/exercicio2/exercicio2';
import { Exercicio3 } from './app/exercicio3/exercicio3';
import { Exercicio4 } from './app/exercicio4/exercicio4';
import { Exercicio5 } from './app/exercicio5/exercicio5';
import { Exercicio6 } from './app/exercicio6/exercicio6';
import { Exercicio7 } from './app/exercicio7/exercicio7';
import { Exercicio8 } from './app/exercicio8/exercicio8';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Exercicio1,
    Exercicio2,
    Exercicio3,
    Exercicio4,
    Exercicio5,
    Exercicio6,
    Exercicio7,
    Exercicio8
  ],
  template: `
  <app-exercicio1></app-exercicio1>
  <app-exercicio2></app-exercicio2>
  <app-exercicio3></app-exercicio3>
  <app-exercicio4></app-exercicio4>
  <app-exercicio5></app-exercicio5>
  <app-exercicio6></app-exercicio6>
  <app-exercicio7></app-exercicio7>
  <app-exercicio8></app-exercicio8>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
