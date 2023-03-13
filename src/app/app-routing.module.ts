import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rutas
const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  { 
    path: 'dashboard-admin', 
    loadChildren: () => import('./dashboard-admin/dashboard-admin.module').then( m => m.DashboardAdminModule ),
  },
  { 
    path: 'dashboard-user', 
    loadChildren: () => import('./dashboard-user/dashboard-user.module').then( m => m.DashboardUserModule ),
  },
  { 
    path: '**', 
    redirectTo: 'auth' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
