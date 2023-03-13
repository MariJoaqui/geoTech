import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { DashboardUserComponent } from './dashboard-user.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
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
