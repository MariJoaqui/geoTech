import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { MaterialModule } from '../material/material.module';
import { PerfilComponent } from './perfil/perfil.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

@NgModule({
  declarations: [
    PerfilComponent,
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
