import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';// utilizar fromularios


@NgModule({
  declarations:[
   AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
