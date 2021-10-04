import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearPeticionesComponent } from './componentes/peticiones/crear-peticiones/crear-peticiones.component';
import { ListaPeticionesComponent } from './componentes/peticiones/lista-peticiones/lista-peticiones.component';

const routes: Routes = [
  { path: 'lista_peticiones', component: ListaPeticionesComponent },
  { path: 'crear_peticiones', component: CrearPeticionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
