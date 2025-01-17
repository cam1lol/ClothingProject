import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavComponent } from './layout/menu/sidebarmenu/sidebarmenu.component';
import { DashboardComponent } from './layout/menu/dashboard/dashboard.component';
import { MediaComponent } from './layout/menu/media/media.component';
import { PagesComponent } from './layout/menu/pages/pages.component';
import { ProductsComponent } from './layout/menu/products/products.component';
import { SettingsComponent } from './layout/menu/settings/settings.component';
import { StatisticsComponent } from './layout/menu/statistics/statistics.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenunavComponent,
    DashboardComponent,
    MediaComponent,
    PagesComponent,
    ProductsComponent,
    SettingsComponent,
    StatisticsComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
