import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitudes-procesadas',
  templateUrl: './solicitudes-procesadas.component.html',
  styleUrls: ['./solicitudes-procesadas.component.css']
})
export class SolicitudesProcesadasComponent {

  searchText: string = '';
 
  users: any[] = [
    { event: 'Secundaria sin potencia', red: '2FP-6-4', lider: 'Fulanito detal', date: '12-03-2022' },
    { event: 'Noloserick', red: '6FP-6-5', lider: 'Otro carajo', date: '12-03-2022' },
    { event: 'Se fue la lu', red: '9FP-7-4', lider: 'Uno mas xd', date: '13-03-2022' },
 
  ];

  get filteredUsers() {
    return this.users.filter(user => {
      return user.event.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.red.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.lider.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.date.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
