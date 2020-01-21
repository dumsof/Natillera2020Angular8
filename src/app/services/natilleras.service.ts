import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NatilleraModel } from '../models/natillera/natillera.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NatillerasService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apiKey = 'AIzaSyCSxm0KScEDgs23aL1CBdksvBoSZee9LkA';
  constructor(private http: HttpClient) { }

  GuardarNatillera(natillera: NatilleraModel) {
    const datosNatillera = {
      natilleraId: natillera.natailleraid,
      nombre: natillera.nombre,
      descripcion: natillera.descripcion,
    };
    this.http.post(`${this.url}`, datosNatillera).pipe(map(respuesta => {

      return respuesta;
    }));
  }
}
