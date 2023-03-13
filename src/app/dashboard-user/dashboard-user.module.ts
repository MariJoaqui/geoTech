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


@NgModule({
  declarations: [
    DashboardUserComponent,
    CrearSolicitudComponent,
    VerSolicitudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardUserRoutingModule,
    MaterialModule
  ]
})
export class DashboardUserModule { }
