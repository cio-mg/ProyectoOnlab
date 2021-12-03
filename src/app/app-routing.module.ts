import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [  {path: 'home', component:HomeComponent},
{path: 'servicio', component:ServicioComponent},
{path: 'paciente', component:PacienteComponent},
{path: 'preguntas', component:PreguntasComponent},
{path: 'about', component:AboutComponent},
{path: 'registrarse', component:RegistrarseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
