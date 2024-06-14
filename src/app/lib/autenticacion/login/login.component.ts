import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userDefault: string = 'javmeridadev@gmail.com';
  passDefault: string = '03032024';
  mensajeUser = '';
  mensajePass = '';
  emailUser: string = '';
  passuser: string = '';

  LogIn() {
    if (this.emailUser !== this.userDefault) {
      this.mensajeUser = 'El usuario ' + this.emailUser + ' es incorrecto. ';
    } else {
      this.mensajeUser = 'El usuario ' + this.emailUser + ' es correcto. ';
    }
    if (this.passuser !== this.passDefault) {
      this.mensajePass = 'La contraseña es incorrecta.';
    } else {
      this.mensajePass = 'La contraseña es correcta.';
    }
  }
}
