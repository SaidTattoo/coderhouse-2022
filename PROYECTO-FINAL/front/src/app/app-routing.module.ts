import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//path  login  and lazy loading to dashboard
const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path:'carrito', loadChildren: () => import('../app/pages/carrito/carrito.module').then(m => m.CarritoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
