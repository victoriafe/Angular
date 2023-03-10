import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadearComponent } from './header/headear.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecursosComponent } from './recursos/recursos.component';
import { SobreComponent } from './sobre/sobre.component';
import { EnviarFormularioComponent } from './enviar-formulario/enviar-formulario.component';

@NgModule({
  declarations: [AppComponent, HeadearComponent, FormularioComponent, HomeComponent, RecursosComponent, SobreComponent, EnviarFormularioComponent],
  imports: [BrowserModule,RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
