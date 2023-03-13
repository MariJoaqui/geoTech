import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Módulos de autenticación
import { LoginComponent } from './pages/login/login.component';
import { GestionUsuarioComponent } from './pages/gestion-usuario/gestion-usuario.component';


const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'gestion-usuario',
        component: GestionUsuarioComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
