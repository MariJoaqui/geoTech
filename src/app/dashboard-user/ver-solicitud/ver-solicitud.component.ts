import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-solicitud',
  templateUrl: './ver-solicitud.component.html',
  styleUrls: ['./ver-solicitud.component.css']
})
export class VerSolicitudComponent {

  solicitud: number = 2;
  searchText: string = '';
 
  users: any[] = [
    { event: 'Secundaria sin potencia', red: '2FP-6-4', estado: 'Pendiente', date: '12-03-2022' },
    { event: 'Noloserick', red: '6FP-6-5', estado: 'Pendiente', date: '12-03-2022' },
    { event: 'Se fue la lu', red: '9FP-7-4', estado: 'procesada', date: '13-03-2022' },
    { event: 'Se fue la lu', red: '9FP-7-4', estado: 'procesada', date: '13-03-2022' },
    { event: 'Se fue la lu', red: '9FP-7-4', estado: 'procesada', date: '13-03-2022' },
    { event: 'Se fue la lu', red: '9FP-7-4', estado: 'procesada', date: '13-03-2022' },
    { event: 'Se fue la lu', red: '9FP-7-4', estado: 'procesada', date: '13-03-2022' },
 
  ];

  get filteredUsers() {
    return this.users.filter(user => {
      return user.event.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.red.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.estado.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.date.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
