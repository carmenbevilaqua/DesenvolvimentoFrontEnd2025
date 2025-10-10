import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vendas-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './vendas-component.html',
  styleUrl: './vendas-component.css'
})
export class VendasComponent {
  constructor(private router: Router) {}
}
