import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SingupComponent, AutenticacionComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginComponent, SingupComponent, AutenticacionComponent],
})
export class AutenticacionModule {}
