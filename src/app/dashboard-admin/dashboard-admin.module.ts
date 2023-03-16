import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Módulos
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { MaterialModule } from '../material/material.module';

// Componentes
import { DashboardAdminComponent } from './dashboard-admin.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { SolicitudesPendientesComponent } from './solicitudes-pendientes/solicitudes-pendientes.component';
import { SolicitudesProcesadasComponent } from './solicitudes-procesadas/solicitudes-procesadas.component';
import { AtenderSolicitudesComponent } from './atender-solicitudes/atender-solicitudes.component';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    GestionUsuariosComponent,
    SolicitudesPendientesComponent,
    SolicitudesProcesadasComponent,
    AtenderSolicitudesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardAdminRoutingModule,
    MaterialModule
  ]
})
export class DashboardAdminModule { }
