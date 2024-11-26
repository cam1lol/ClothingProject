import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuRoutingModule } from './menu/menu-routing.module';  // Importa tu módulo de rutas aquí

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirección inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MenuRoutingModule],  // Asegúrate de incluir MenuRoutingModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
