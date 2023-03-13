import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './pages/login/login.component';
import { GestionUsuarioComponent } from './pages/gestion-usuario/gestion-usuario.component';


@NgModule({
  declarations: [
    LoginComponent,
    GestionUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
