import { Component } from '@angular/core';

// Interface
import { Solicitudes } from 'src/app/auth/interface/auth.interface';
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-solicitudes-pendientes',
  templateUrl: './solicitudes-pendientes.component.html',
  styleUrls: ['./solicitudes-pendientes.component.css']
})
export class SolicitudesPendientesComponent {

  searchText: string = '';
 
  // Arreglo para obtener las solicitudes de la base dde datos
  solicitudes: Solicitudes[] = [];

  // Servicios
  constructor( 
    private geotechService: GeotechService, 
  ) { }

  // Llamada al servicio para mostrar las solicitudes
  ngOnInit(): void {

    this.geotechService.getSolicitudesPorEstado( 'pendiente' )
      .subscribe( response => {
        this.solicitudes = response;
      }
    );

  }

  get filteredSolicitudes() {
    return this.solicitudes.filter(solicitud => {
      return solicitud.evento.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.red.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.fecha?.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
