import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import { RespuestaLogueo } from '../models/respuestalogueo.model';


@Injectable({
  providedIn: 'root'
})
export class AutentificarService {

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;

  private currentRespuesaLogueoSubject: BehaviorSubject<RespuestaLogueo>;
  public currenRespuestaLogueo: Observable<RespuestaLogueo>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  login(emails: string, passwords: string) {
    const datosUsuario = {
      email: emails,
      password: passwords
    };

    return this.http.post<RespuestaLogueo>(`${environment.apiUrl}/CuentaUsuario/Logueo`, datosUsuario)
      .pipe(map(token => {
        console.log('este es el token que se devuelve', token);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(token));
        this.currentRespuesaLogueoSubject.next(token);
        return token;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
