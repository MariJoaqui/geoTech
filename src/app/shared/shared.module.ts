import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { MaterialModule } from '../material/material.module';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
  
  
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
