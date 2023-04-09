import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import * as FileSaver from 'file-saver';

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

  verArchivo( archivo: string, nombre: string ): void {
      
    const byteCharacters = atob(archivo);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = nombre;
    enlace.click();
    URL.revokeObjectURL(url);

  }

}
