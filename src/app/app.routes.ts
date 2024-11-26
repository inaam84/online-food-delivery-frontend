import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';

export const routes: Routes = [
    ...authRoutes, // Authentication-related routes
  { path: '**', redirectTo: 'login' }, // Redirect invalid routes
];
