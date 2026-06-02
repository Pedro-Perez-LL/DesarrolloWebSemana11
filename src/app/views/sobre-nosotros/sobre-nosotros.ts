import { Component } from '@angular/core';
import { Equipo } from '../../components/equipo/equipo';
import { Mision } from '../../components/mision/mision';
import { Vision } from '../../components/vision/vision';
import { Valores } from '../../components/valores/valores';
import { ContactoInfo } from '../../components/contacto-info/contacto-info';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [Equipo, Mision, Vision, Valores, ContactoInfo],
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.css',
})
export class SobreNosotros {

}