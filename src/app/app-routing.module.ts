import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HeadearComponent } from './header/headear.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'headear', component: HeadearComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
