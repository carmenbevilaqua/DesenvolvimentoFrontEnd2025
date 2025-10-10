import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [RouterLink], // necessário se usar [routerLink] no template
  templateUrl: './produto-component.html',
  styleUrls: ['./produto-component.css'],
})
export class ProdutoComponent {
  
}
