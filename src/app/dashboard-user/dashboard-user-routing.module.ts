import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { DashboardUserComponent } from './dashboard-user.component';
import { DetallesSolicitudComponent } from '../shared/detalles-solicitud/detalles-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { PerfilComponent } from '../shared/perfil/perfil.component';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardUserComponent,
    children: [
      {
        path: 'solicitar',
        component: CrearSolicitudComponent
      },
      {
        path: 'solicitudes',
        component: VerSolicitudComponent
      },
      {
        path: 'detalles/:id',
        component: DetallesSolicitudComponent
      },
      {
        path: 'editar/:id',
        component: EditarSolicitudComponent
      },
      {
        path: 'perfil/:id',
        component: PerfilComponent
      },
      {
        path: '**',
        redirectTo: 'solicitar'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
