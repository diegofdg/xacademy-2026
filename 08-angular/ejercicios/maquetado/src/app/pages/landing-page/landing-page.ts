import { Component } from '@angular/core';
import { Introduccion } from '../../core/components/introduccion/introduccion';
import { Impacto } from '../../core/components/impacto/impacto';
import { Fondo } from '../../core/components/fondo/fondo';
import { Programas } from '../../core/components/programas/programas';
import { Capacitaciones } from '../../core/components/capacitaciones/capacitaciones';
import { Equipo } from '../../core/components/equipo/equipo';
import { Alianzas } from '../../core/components/alianzas/alianzas';

@Component({
  imports: [Introduccion, Impacto, Fondo, Programas, Capacitaciones, Equipo, Alianzas],
  selector: 'app-landing-page',
  styleUrl: './landing-page.css',
  templateUrl: './landing-page.html',
})
export class LandingPage {}
