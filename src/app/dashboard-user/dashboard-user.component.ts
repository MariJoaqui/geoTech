import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {

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
