import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    asunto: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mensaje: new FormControl('', [Validators.required]),
  });

  submitForm() {
    if (this.contactForm.invalid) {
      alert('Please complete the form');
    } else {
      confirm('Are you sure want to send?');
      const formValue = this.contactForm.value;
      console.log(formValue);
    }
  }
}
