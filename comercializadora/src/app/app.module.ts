import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { VehiculosListComponent } from './vehiculos/vehiculos-list/vehiculos-list.component';

@NgModule({
  declarations: [		
    AppComponent,
      NavbarComponent,
      BannerComponent,
      VehiculosListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiculosModule,
    HttpClientModule,  // Importando HttpClientModule para usar HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
