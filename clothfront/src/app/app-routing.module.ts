import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./layout/menu/menu-routing.module').then(m => m.MenuRoutingModule) },
      
    ],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // ruta por defecto hasta cambiar a la principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
