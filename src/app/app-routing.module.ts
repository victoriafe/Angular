import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HeadearComponent } from './header/headear.component';
import { RecursosComponent } from './recursos/recursos.component';
import { SobreComponent } from './sobre/sobre.component';
import { EnviarFormularioComponent } from './enviar-formulario/enviar-formulario.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'headear', component: HeadearComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'recursos', component: RecursosComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'enviar-formulario', component:EnviarFormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
