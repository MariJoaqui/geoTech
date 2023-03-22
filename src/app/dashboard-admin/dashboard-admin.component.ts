import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  solicitud: number = 1;
  // MatExpansion
  panelOpenState = false;
  
  logout(){}
  
}
