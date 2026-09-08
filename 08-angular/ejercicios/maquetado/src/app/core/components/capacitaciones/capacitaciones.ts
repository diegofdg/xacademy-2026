import { Component } from '@angular/core';
import { ProgramaModel } from '../../models/Programa';
import { Button } from '../button/button';

@Component({
  imports: [Button],
  selector: 'app-capacitaciones',
  styleUrl: './capacitaciones.css',
  templateUrl: './capacitaciones.html',
})
export class Capacitaciones {
  listaCapacitaciones: ProgramaModel[] = [
    {
      id: 1,
      titulo: 'Estafas virtuales: ¿cómo protegernos?',
      texto:
        'Los canales de comunicación a través de medios digitales cobraron gran protagonismo a partir de la pandemia. Al mismo tiempo, se perfeccionan cada vez más rápido las modalidades de estafas y fraudes virtuales. En esta capacitación vas a aprender diferentes tips y consejos útiles para navegar de manera más segura.',
      imagen: 'img/estafas-virtuales-04-600x453.jpg',
      logo: null,
      posicionImagen: 'left',
    },
    {
      id: 2,
      titulo: 'Seguridad informática para infancias',
      texto:
        '¿Navegamos seguros en internet? La propuesta es una charla para niños y niñas donde se brindan herramientas de seguridad y autocuidado digital.',
      imagen: 'img/seguridad-informatica-para-infancias-600x398.jpg',
      logo: null,
      posicionImagen: 'right',
    },
  ];
}
