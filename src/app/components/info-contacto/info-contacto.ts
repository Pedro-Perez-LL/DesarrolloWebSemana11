import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-contacto.html',
  styleUrl: './info-contacto.css'
})
export class InfoContactoComponent {
  // Datos ficticios para mostrar en la vista
  telefono = '+51 999 999 999';
  correo = 'contacto@empresa.com';
  direccion = 'Av. Principal 123, Ica, Perú';
}
