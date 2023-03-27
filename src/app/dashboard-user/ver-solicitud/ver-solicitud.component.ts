import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


// Interface
import { Solicitudes } from 'src/app/auth/interface/auth.interface';
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-ver-solicitud',
  templateUrl: './ver-solicitud.component.html',
  styleUrls: ['./ver-solicitud.component.css']
})
export class VerSolicitudComponent {

  searchText: string = '';
 
  // Arreglo para obtener las solicitudes  de la base dde datos
  solicitudes: Solicitudes[] = [];

  // Servicios
  constructor( 
    private geotechService: GeotechService, 
    private snackBar : MatSnackBar,
  ) { }

  // Llamada al servicio para mostrar las solicitudes
  ngOnInit(): void {

    // Id del tecnico que realiza la solicitud
    const id_tecnico = parseInt(localStorage.getItem('id')??'');

    this.geotechService.getSolicitudPorId( id_tecnico )
      .subscribe( response => {
        this.solicitudes = response;
      }
    );

  }

  // Filtrar
  get filteredSolicitud() {
    return this.solicitudes.filter( solicitud => {
      return solicitud.evento.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.red.toLowerCase().includes(this.searchText.toLowerCase())
      }
    );
  }

  // Anular la solicitud
  anular( id:any ) {
    this.geotechService.anularSolicitud( id ).subscribe( response => {
      
      if ( response )  {

        // Buscar la solicitud que ha sido anulada en la lista filteredSolicitud
        const solicitudAnulada = this.filteredSolicitud.find(solicitud => solicitud.id === id);
        if (solicitudAnulada) {
          // Actualizar el estado de la solicitud a "anulada"
          solicitudAnulada.estado = "anulada";
        }
        // Mensaje
        this.snackBar.open('Se ha anulado la solicitud', 'Cerrar', { duration: 5000 });

      }
      else {

        // Mensaje de error
        this.snackBar.open('No se pudo anular la solicitud', 'Cerrar', {
          duration: 5000 
        });

      }
      
    })
  }

}
