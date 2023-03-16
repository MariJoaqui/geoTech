import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Módulos
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { MaterialModule } from '../material/material.module';

// Componentes
import { DashboardUserComponent } from './dashboard-user.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';
import { DetallesSolicitudComponent } from './detalles-solicitud/detalles-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';


@NgModule({
  declarations: [
    DashboardUserComponent,
    CrearSolicitudComponent,
    VerSolicitudComponent,
    DetallesSolicitudComponent,
    EditarSolicitudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardUserRoutingModule,
    MaterialModule
  ]
})
export class DashboardUserModule { }
