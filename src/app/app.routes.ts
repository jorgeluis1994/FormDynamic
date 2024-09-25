import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'forms', loadChildren: () => import('./forms/forms-routing.module').then(m => m.FormsRoutingModule) },
  { path: '', redirectTo: '/forms', pathMatch: 'full' }
];


