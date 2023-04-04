import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Módulos
import { MaterialModule } from '../material/material.module';
import { PerfilComponent } from './perfil/perfil.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ConfirmarEliminarComponent } from './confirmar-eliminar/confirmar-eliminar.component';

@NgModule({
  declarations: [
    PerfilComponent,
    RecuperarContrasenaComponent,
    AgregarUsuarioComponent,
    ConfirmarEliminarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
