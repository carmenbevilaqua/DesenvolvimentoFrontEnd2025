import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhe-usuario-component.html',
  styleUrl: './detalhe-usuario-component.css'
})
export class DetalheUsuarioComponent {
  constructor(private router: Router) {}
}
