import { Component, signal } from '@angular/core';
import { NgIf, NgForOf, NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgForOf, NgSwitch, NgSwitchDefault, NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase-01');
  condicion = true;
  emptyArray = [];
  array1 = [ 1, 2, 3 ];
  array2 = [
    { id: 1, name: 'Juan', lastName: 'Perez', age: 25 },
    { id: 2, name: 'Maria', lastName: 'Gomez', age: 30},
    { id: 3, name: 'Pedro', lastName: 'Lopez', age: 35}
  ];
  color = 'red';

  trackByFn(index: number, item: number): number {
    return item;
  }
}
