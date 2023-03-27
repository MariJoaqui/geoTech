import { Component } from '@angular/core';

// Interface
import { Solicitudes } from 'src/app/auth/interface/auth.interface';
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-solicitudes-procesadas',
  templateUrl: './solicitudes-procesadas.component.html',
  styleUrls: ['./solicitudes-procesadas.component.css']
})
export class SolicitudesProcesadasComponent {
  
  searchText: string = '';
 
  // Arreglo para obtener las solicitudes de la base dde datos
  solicitudes: Solicitudes[] = [];

  // Servicios
  constructor( 
    private geotechService: GeotechService, 
  ) { }

  // Llamada al servicio para mostrar las solicitudes
  ngOnInit(): void {

    this.geotechService.getSolicitudesPorEstado( 'procesada' )
      .subscribe( response => {
        this.solicitudes = response;
      }
    );

  }

  get filteredSolicitudes() {
    return this.solicitudes.filter(solicitud => {
      return solicitud.evento.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.red.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.fecha?.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.hora?.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
