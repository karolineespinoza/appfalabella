import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'appfalabella';
  rut: string;
  numeroCelular: string;
  email: string;
  cliente: any;

  mostrarMsjRut = false;
  mostrarMsjNumero = false;
  mostrarMsjEmail = false;

  placeholderRut = 'Ej: 11.111.111-1';
  placeholderCelular = 'Ej: 987654321';
  placeholderCorreo = 'Ej: correo@correo.cl';

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit(f) {

    localStorage.setItem('rut', f.value.rut);
    localStorage.setItem('email', f.value.email);
    localStorage.setItem('numeroCelular', f.value.numeroCelular);

  }

  onChange(f: any, input: string) {
    if (input === 'rut'){
      if (f.value.rut !== ''){
        this.mostrarMsjRut = false;
      }  else{
        this.mostrarMsjRut = true;
      }
    } else if (input === 'numeroCelular'){
      if (f.value.numeroCelular !== ''){
        this.mostrarMsjNumero = false;
      }  else{
        this.mostrarMsjNumero = true;
      }
    } else{
      if (f.value.email !== ''){
        this.mostrarMsjEmail = false;
      }  else{
        this.mostrarMsjEmail = true;
      }
    }
  }
}
