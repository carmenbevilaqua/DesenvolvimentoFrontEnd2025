import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estoque-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './estoque-component.html',
  styleUrl: './estoque-component.css'
})
export class EstoqueComponent {
  constructor(private router: Router) {}
}
