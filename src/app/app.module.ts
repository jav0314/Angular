import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './lib/autenticacion/singup/singup.component';
import { LoginComponent } from './lib/autenticacion/login/login.component';
import { EjemplosComponent } from './lib/ejemplos/ejemplos.component';

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    LoginComponent,
    EjemplosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
