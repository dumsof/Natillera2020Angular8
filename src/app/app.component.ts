import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AutentificarService } from './services/autentificar.service';
import {  Usuario } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    currentUser: Usuario;

    constructor(
        private router: Router,
        private authenticationService: AutentificarService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}