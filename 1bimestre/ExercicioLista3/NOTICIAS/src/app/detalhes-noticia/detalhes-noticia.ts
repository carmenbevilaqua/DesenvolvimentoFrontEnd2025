import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalhes-noticia',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes-noticia.html',
  styleUrls: ['./detalhes-noticia.css'],
})
export class DetalhesNoticia {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/noticias']);
  }
}
