import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: LandingComponent,
        // data: { scrollPositionRestoration: 'enabled' }
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
