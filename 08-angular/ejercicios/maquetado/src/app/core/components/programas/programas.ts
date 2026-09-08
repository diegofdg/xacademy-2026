import { Component, signal, WritableSignal } from '@angular/core';
import { ProgramaModel } from '../../models/Programa';
import { Button } from '../button/button';
import { FeatureService } from '../../services/feature';
import { map, Subscription } from 'rxjs';

@Component({
  imports: [Button],
  selector: 'app-programas',
  styleUrl: './programas.css',
  templateUrl: './programas.html',
})
export class Programas {
  listaProgramas: WritableSignal<ProgramaModel[]> = signal([]);
  subscription = new Subscription();
  mostrarBotones = false;

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.subscription.add(
      this.featureService
        .getFeatures()
        .pipe(
          map((res) => {
            res[1].titulo = 'Robótica educativa: la tecnología del futuro 2 ';
            return res;
          }),
        )
        .subscribe({
          next: (res) => {
            this.listaProgramas.set(res);
            console.log(res);
          },
          error: (error) => {
            console.warn(error);
          },
          complete: () => {
            console.log('Terminado');
          },
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddFeature() {
    this.featureService
      .postFeatures({
        id: 3,
        titulo: 'xacademy',
        texto: 'Este programa se ha agregado.',
        imagen: 'img/xacademy-01-600x400.jpg',
        logo: null,
        posicionImagen: 'left',
      } as ProgramaModel)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onEditFeature() {
    this.featureService
      .putFeatures({
        id: 3,
        titulo: 'xacademy',
        texto: 'Este programa se ha agregado y luego se ha modificado.',
        imagen: 'img/xacademy-01-600x400.jpg',
        logo: null,
        posicionImagen: 'left',
      } as ProgramaModel)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onDeleteFeature() {
    this.featureService.deleteFeatures(3).subscribe((res) => {
      console.log(res);
    });
  }
}
