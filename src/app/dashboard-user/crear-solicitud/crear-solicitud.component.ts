import { Component } from '@angular/core';

interface Nodo {
  nodo : string;
  value: string;
}

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {

  nodo: Nodo[] = [
    { nodo: 'monte sina', value: '' },
    { nodo: 'flor de bastion', value: '' },
    { nodo: 'florida', value: '' },
    { nodo: 'pascuales', value: '' },
    { nodo: 'mucholote', value: '' },
    { nodo: 'duran sj', value: '' },
    { nodo: 'suburbio', value: '' },
  ];

}
