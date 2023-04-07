import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-detalles-solicitud',
  templateUrl: './detalles-solicitud.component.html',
  styleUrls: ['./detalles-solicitud.component.css']
})
export class DetallesSolicitudComponent {

  solicitud! : any;
  archivos!  : any;

  constructor( 
    private activateRoute : ActivatedRoute,
    private geotechService: GeotechService,
    private snackBar      : MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap( ({ id }) => this.geotechService.getSolicitudesPorId( id ) )
    )
    .subscribe( solicitud => this.solicitud = solicitud );

    this.activateRoute.params.pipe(
      switchMap( ({ id }) => this.geotechService.getArchivosPorId( id ) )
    )
    .subscribe( respuesta => this.archivos = respuesta );
    
  }

  descargarArchivo(archivo: string, nombre: string): void {
    const ultimasTres = nombre.substr(-3);
    
    if ( ultimasTres == 'PDF' || ultimasTres == 'pdf' ) {
      console.log('si');
    }
    else if ( ultimasTres == 'KMZ' || ultimasTres == 'kmz' ) {
      console.log('no');
      
    }
    else if ( ultimasTres == 'JPG' || ultimasTres == 'jpg' ) {
      console.log('cerca');
    }
    else {
      // Mensaje
      this.snackBar.open('No se puede abrir este tipo de archivo', 'Cerrar', {
        duration: 5000 
      });
    }
  }
  

}
