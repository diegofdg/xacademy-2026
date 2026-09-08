import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  @Input() btnText: string = '';
  @Input() btnClass: 'redondo-left' | 'redondo-red' | '' = '';
  @Input() btnIcon: string = '';
  @Input() btnRoute: '/' | '/contacto' | '' = '';

  @Output() onBtnClick = new EventEmitter<void>();

  btnClicked() {
    this.onBtnClick.emit();
  }
}
