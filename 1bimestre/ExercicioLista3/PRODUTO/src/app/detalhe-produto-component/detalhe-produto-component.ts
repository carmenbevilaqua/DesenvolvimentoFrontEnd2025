import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  templateUrl: './detalhe-produto-component.html',
  styleUrls: ['./detalhe-produto-component.css'],
})
export class DetalheProdutoComponent {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/produto']);
  }
}
