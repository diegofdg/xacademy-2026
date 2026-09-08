import { Component } from '@angular/core';
import { EquipoModel } from '../../models/Equipo';

@Component({
  imports: [],
  selector: 'app-equipo',
  styleUrl: './equipo.css',
  templateUrl: './equipo.html',
})
export class Equipo {
  listaEquipo: EquipoModel[] = [
    {
      id: 1,
      imagen: 'img/twp-juan-400x296.png',
      nombre: 'Juan Santiago',
      cargo: 'Presidente',
    },
    {
      id: 2,
      imagen: 'img/twp-walter-400x296.png',
      nombre: 'Walter Abrigo',
      cargo: 'Secretario',
    },
    {
      id: 3,
      imagen: 'img/twp-gabriela-400x296.png',
      nombre: 'Gabriela Fernandez',
      cargo: 'Comisión Directiva',
    },
    {
      id: 4,
      imagen: 'img/twp-gabriel-400x296.png',
      nombre: 'Gabriel Dubini',
      cargo: 'Tesorero',
    },
    {
      id: 5,
      imagen: 'img/twp-florencia-400x296.png',
      nombre: "Florencia D'Agostino",
      cargo: 'Dirección Ejecutiva',
    },
    {
      id: 6,
      imagen: 'img/twp-celeste-400x296.png',
      nombre: 'Celeste Torresi',
      cargo: 'Comisión Directiva',
    },
    {
      id: 7,
      imagen: 'img/twp-lucia-400x296.png',
      nombre: 'Lucia Jaimez',
      cargo: 'Directora Academy',
    },
    {
      id: 8,
      imagen: 'img/agustin-chino-400x296.png',
      nombre: 'Agustín Chino',
      cargo: 'Coord. Área Inclusión Social',
    },
    {
      id: 9,
      imagen: 'img/enzo-dotto-400x296.png',
      nombre: 'Enzo Dotto',
      cargo: 'Relaciones Institucionales',
    },
  ];
}
