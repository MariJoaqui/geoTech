import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitudes-pendientes',
  templateUrl: './solicitudes-pendientes.component.html',
  styleUrls: ['./solicitudes-pendientes.component.css']
})
export class SolicitudesPendientesComponent {

  searchText: string = '';
 
  users: any[] = [
    { event: 'Secundaria sin potencia', red: '2FP-6-4', lider: 'Fulanito detal' },
    { event: 'Noloserick', red: '6FP-6-5', lider: 'Otro carajo' },
    { event: 'Se fue la lu', red: '9FP-7-4', lider: 'Uno mas xd' },
 
  ];

  get filteredUsers() {
    return this.users.filter(user => {
      return user.event.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.red.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.lider.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
