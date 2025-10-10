import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cursos-component.html',
  styleUrl: './cursos-component.css'
})
export class CursosComponent {
  constructor(private router: Router) {}
}
