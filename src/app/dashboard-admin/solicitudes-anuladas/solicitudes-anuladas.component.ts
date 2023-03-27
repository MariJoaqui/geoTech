import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Interface
import { Solicitudes } from 'src/app/auth/interface/auth.interface';
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-solicitudes-anuladas',
  templateUrl: './solicitudes-anuladas.component.html',
  styleUrls: ['./solicitudes-anuladas.component.css']
})
export class SolicitudesAnuladasComponent {

  searchText: string = '';
 
  // Arreglo para obtener las solicitudes de la base dde datos
  solicitudes: Solicitudes[] = [];

  // Servicios
  constructor( 
    private geotechService : GeotechService, 
    private snackBar       : MatSnackBar,
  ) { }

  // Llamada al servicio para mostrar las solicitudes
  ngOnInit(): void {

    this.geotechService.getSolicitudesPorEstado( 'anulada' )
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

  // Eliminar solicitud anulada 
  eliminar( id: any ) {
    this.geotechService.eliminarSolicitudAnulada( id )
      .subscribe( respuesta => {
        
        console.log(respuesta);
        
        // Eliminar el elemento del arreglo solicitudes correspondiente al id dado
        const index = this.solicitudes.findIndex(solicitud => solicitud.id === id);
        if (index !== -1) {
          this.solicitudes.splice(index, 1);
        }

        // Mensaje
        this.snackBar.open('Se ha eliminado correctamente', 'Cerrar', {
          duration: 5000
        });

      }
    );
  }

}
