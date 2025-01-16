import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavComponent } from './menu/sidebarmenu/sidebarmenu.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { MediaComponent } from './menu/media/media.component';
import { PagesComponent } from './menu/pages/pages.component';
import { ProductsComponent } from './menu/products/products.component';
import { SettingsComponent } from './menu/settings/settings.component';
import { StatisticsComponent } from './menu/statistics/statistics.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
