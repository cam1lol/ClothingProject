import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports donde están los componentes que se usarán en las rutas
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomeComponent } from 'src/app/home/home/home.component';
import { ContactmeComponent } from 'src/app/home/contactme/contactme.component';

// Declaración de las rutas
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'media', component: MediaComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactmeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
