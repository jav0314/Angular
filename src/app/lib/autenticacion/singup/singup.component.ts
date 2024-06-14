import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent {
  nombre: string = '';
  apellido: string = '';
  celular: string = '';
  cedula: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';

  SingUp() {}
}
