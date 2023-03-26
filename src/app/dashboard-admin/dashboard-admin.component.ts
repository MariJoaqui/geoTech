import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  // MatExpansion
  panelOpenState = false;

  constructor( private router: Router ) { }

  logout() {
    // Borrar el id del usuario del localStorage
    localStorage.removeItem('id');

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['']);
  }
  
}
