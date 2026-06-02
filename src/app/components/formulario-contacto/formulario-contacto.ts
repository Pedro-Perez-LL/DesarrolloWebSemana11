import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-contacto.html',
  styleUrl: './formulario-contacto.css'
})
export class FormularioContactoComponent {
  // Definimos el grupo de inputs y sus reglas de validación
  contactoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  enviarFormulario() {
    if (this.contactoForm.valid) {
      console.log('Datos enviados con éxito:', this.contactoForm.value);
      alert('¡Gracias por tu mensaje! Te responderemos pronto.');
      this.contactoForm.reset(); // Limpia los campos
    } else {
      alert('Por favor, rellena todos los campos correctamente.');
    }
  }
}
