import { Component } from '@angular/core';

interface Nodo {
  nodo : string;
  value: string;
}

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent {

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
