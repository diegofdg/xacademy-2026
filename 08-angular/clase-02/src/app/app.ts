import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('clase-02');
  contador = signal(0);
  contadorAngular16 = 0;

  nombres = ['Juan', 'Maria', 'Pedro', 'Gaston', 'Lucia', 'Ana', 'Jose'];
  nombreArraySignal = signal([this.nombres[0], this.nombres[1]]);
  estaGastonEnArray = computed(() => this.nombreArraySignal().includes('Gaston'));

  constructor() {
    setInterval(() => {
      this.contadorAngular16++;
      this.contador.set(this.contador() + 1);
    }, 1000);
    
    effect(() => {
      console.log('El array de nombres es: ', this.nombreArraySignal());
    });
  }

  agregarNombre() {
    this.nombreArraySignal.set([
      ...this.nombreArraySignal(),
      this.nombres[this.nombreArraySignal().length % this.nombres.length],
    ]);
  }
}
