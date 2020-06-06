import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'appfalabella';
  rut: string;
  numeroCelular: number;
  email: string;

  placeholderRut = 'Ej: 11.111.111-1';
  placeholderCelular = 'Ej: 987654321';
  placeholderCorreo = 'Ej: correo@correo.cl';
}


