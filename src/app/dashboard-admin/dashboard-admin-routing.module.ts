import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { AtenderSolicitudesComponent } from './atender-solicitudes/atender-solicitudes.component';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { DetallesSolicitudComponent } from '../shared/detalles-solicitud/detalles-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { PerfilComponent } from '../shared/perfil/perfil.component';
import { SolicitudesPendientesComponent } from './solicitudes-pendientes/solicitudes-pendientes.component';
import { SolicitudesProcesadasComponent } from './solicitudes-procesadas/solicitudes-procesadas.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';


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
        path: 'atender-solicitud/:id',
        component: AtenderSolicitudesComponent
      },
      {
        path: 'detalles/:id',
        component: DetallesSolicitudComponent
      },
      {
        path: 'editar-solicitud/:id',
        component: EditarSolicitudComponent
      },
      {
        path: 'detalles-usuario/:id',
        component: VerUsuarioComponent
      },
      {
        path: 'editar-usuario/:id',
        component: EditarUsuarioComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
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
