import { Component } from '@angular/core';
import { Button } from '../../core/components/button/button';
import { MenuModel } from '../../core/models/Menu';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  imports: [Button, RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  menu: MenuModel[] = [
    { id: 1, titulo: 'Nosotros', route: 'introduccion', mismaPagina: true },
    { id: 2, titulo: 'Programas', route: 'programas', mismaPagina: true },
    { id: 3, titulo: 'Capacitaciones', route: 'capacitaciones', mismaPagina: true },
    { id: 4, titulo: 'Equipo', route: 'equipo', mismaPagina: true },
    { id: 5, titulo: 'Alianzas', route: 'alianzas', mismaPagina: true },
    { id: 6, titulo: 'Contacto', route: '/contacto', mismaPagina: false },
  ];
}
