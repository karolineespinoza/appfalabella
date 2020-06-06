import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:3000';
  private nombreMSDatos = '/microservicio/guardarDatos';

  constructor(private httpClient: HttpClient, private http: Http) {}

  // Microservicio que guardará los datos del cliente.
  public enviarDatosCliente(body: object): Observable<any> {

    const header = new Headers({
      'Content-Type': 'application/json'
    });

    const headerArg: RequestOptionsArgs = {
      headers: header
    };

    return this.http.post(this.url + this.nombreMSDatos, body, headerArg);

  }

}
