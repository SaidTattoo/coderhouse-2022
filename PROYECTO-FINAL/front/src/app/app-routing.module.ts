import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//path  login  and lazy loading to dashboard
const routes: Routes = [
  { path: '', loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path:'carrito', loadChildren: () => import('../app/pages/carrito/carrito.module').then(m => m.CarritoModule)},
  { path:'admin', loadChildren:() => import('../app/pages/admin/admin.module').then(m => m.AdminModule)},
  { path:'**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
