import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
