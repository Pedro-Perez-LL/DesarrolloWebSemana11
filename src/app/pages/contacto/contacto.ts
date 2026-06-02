import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioContactoComponent } from '../../components/formulario-contacto/formulario-contacto';
import { InfoContactoComponent } from '../../components/info-contacto/info-contacto';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormularioContactoComponent, InfoContactoComponent],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {}
