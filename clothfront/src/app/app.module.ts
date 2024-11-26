import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavComponent } from './menu/menunav/menunav.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { MediaComponent } from './menu/media/media.component';
import { PagesComponent } from './menu/pages/pages.component';
import { ProductsComponent } from './menu/products/products.component';
import { SettingsComponent } from './menu/settings/settings.component';
import { StatisticsComponent } from './menu/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    MenunavComponent,
    DashboardComponent,
    MediaComponent,
    PagesComponent,
    ProductsComponent,
    SettingsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
