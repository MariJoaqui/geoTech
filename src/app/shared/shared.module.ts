import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { MaterialModule } from '../material/material.module';
import { PerfilComponent } from './perfil/perfil.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';

@NgModule({
  declarations: [
    PerfilComponent,
    RecuperarContrasenaComponent,
    AgregarUsuarioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
