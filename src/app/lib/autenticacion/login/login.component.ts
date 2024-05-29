import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userDefault: string = 'carlita@tuamorcito.com';
  passDefault: string = '03032024';
  mensajeUser = '';
  mensajePass = '';
  emailUser: string = '';
  passuser: string = '';
  tituloform: string = 'FORMULARIO PRUEBA';

  LogIn() {
    if (this.emailUser !== this.userDefault) {
      this.mensajeUser = 'El usuario ' + this.emailUser + ' es incorrecto.';
    } else {
      this.mensajeUser = 'El usuario ' + this.emailUser + ' es correcto.';
    }
    if (this.passuser !== this.passDefault) {
      this.mensajePass = 'La contraseña ' + this.passuser + ' es incorrecto.';
    } else {
      this.mensajePass = 'La contraseña ' + this.passuser + ' es correcto.';
    }
  }
}
