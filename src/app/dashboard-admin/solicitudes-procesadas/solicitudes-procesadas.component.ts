import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  // Calendario
  showInfo  = false;
  showTable = true;

  toggleInfo() {
    this.showInfo  = !this.showInfo;
    this.showTable = !this.showTable;
  }

  range = new FormGroup({
    inicio: new FormControl<Date | null>(null),
    fin: new FormControl<Date | null>(null),
  });

  get filtrarPorFechas() {
    const inicio = this.range.controls.inicio.value;
    const fin = this.range.controls.fin.value;
  
    if (inicio && fin) {
      const filtrarSolicitudes = this.solicitudes.filter(solicitud => {
        const fecha = new Date(solicitud.fecha!);
        return fecha >= inicio && fecha <= fin;
      });
      return filtrarSolicitudes.reverse();
    } 
    else {
      return this.solicitudes.reverse();
    }
  }

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

  // Filtrar para el buscador
  get filteredSolicitudes() {
    return this.solicitudes.filter(solicitud => {
      return solicitud.evento.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.red.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.fecha?.toLowerCase().includes(this.searchText.toLowerCase()) ||
             solicitud.hora?.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
