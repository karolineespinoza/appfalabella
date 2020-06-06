import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements OnInit {

  renta: string;

  placeholderRenta = 'Ej: $400.000';
  mostrarMsjRenta = false;
  mostrarMsjReqExitoso = false;
  mostrarMsjReqFallido = false;
  private response: any;

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(f: any) {

    const body = new Object(
      {
        rut: localStorage.getItem('rut'),
        numeroCelular: localStorage.getItem('numeroCelular'),
        email: localStorage.getItem('email'),
        renta: f.value.renta,
      }
    );
    this.apiservice.enviarDatosCliente(body)
    .subscribe(obj => {
      this.response = obj;
      if (this.response.status === 200){
        this.mostrarMsjReqExitoso = true;
        this.mostrarMsjReqFallido = false;
        this.eliminarDatosStorage();
      }
      else{
        this.mostrarMsjReqFallido = true;
        this.mostrarMsjReqExitoso = false;
      }
    },
    err => {
      this.mostrarMsjReqFallido = true;
      this.mostrarMsjReqExitoso = false;
    });

    console.log(this.response);
  }

  onChange(f: any) {
      if (f.value.renta !== ''){
        this.mostrarMsjRenta = false;
      }  else{
        this.mostrarMsjRenta = true;
      }
  }

  eliminarDatosStorage(){
    localStorage.clear();
  }
}
