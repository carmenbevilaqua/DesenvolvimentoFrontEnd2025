import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-noticias-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './noticias-component.html',
  styleUrls: ['./noticias-component.css'],
})
export class NoticiasComponent {
  noticias: string[] = [
    'Angular 18 lançado',
    'TypeScript ganha nova versão',
    'Front-end em alta no mercado',
  ];

  constructor(private router: Router) {}

  verDetalhe(i: number) {
    console.log('Índice clicado:', i);
    this.router.navigate(['/detalhe']);
  }
}
