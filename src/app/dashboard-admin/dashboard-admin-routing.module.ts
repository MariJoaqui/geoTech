import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { SolicitudesPendientesComponent } from './solicitudes-pendientes/solicitudes-pendientes.component';
import { SolicitudesProcesadasComponent } from './solicitudes-procesadas/solicitudes-procesadas.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { DashboardAdminComponent } from './dashboard-admin.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,
    children: [
      {
        path: 'solicitudes-pendientes',
        component: SolicitudesPendientesComponent
      },
      {
        path: 'solicitudes-procesadas',
        component: SolicitudesProcesadasComponent
      },
      {
        path: 'gestion-usuarios',
        component: GestionUsuariosComponent
      },
      {
        path: '**',
        redirectTo: 'solicitudes-pendientes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
