import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page';
import { LoginPage } from './pages/login-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: LoginPage }
];
