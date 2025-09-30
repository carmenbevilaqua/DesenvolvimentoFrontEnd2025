import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './usuarios-component.html',
  styleUrl: './usuarios-component.css'
})
export class UsuariosComponent {
  constructor (private router: Router){}
}
