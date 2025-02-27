import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactmeComponent } from './home/contactme/contactme.component';
import { ProjectsComponent } from './home/projects/projects.component';

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
    HomeComponent,
    ContactmeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
