import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {

  // MatExpansion
  panelOpenState = false;
  
  logout(){}
  
  solicitud: number = 2;
}
