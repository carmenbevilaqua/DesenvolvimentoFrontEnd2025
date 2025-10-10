import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-relatorios-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './relatorios-component.html',
  styleUrl: './relatorios-component.css'
})
export class RelatoriosComponent {
  constructor(private router: Router) {}
}
