import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes que se usarán en las rutas
import { MenunavComponent } from './menunav/menunav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

// Declaración de las rutas
const routes: Routes = [
  {
    path: '',
    component: MenunavComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'media', component: MediaComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'statistics', component: StatisticsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
