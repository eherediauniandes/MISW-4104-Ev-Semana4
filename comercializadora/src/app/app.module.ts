import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosModule } from './vehiculos/vehiculos.module';

@NgModule({
  declarations: [
    AppComponent
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
