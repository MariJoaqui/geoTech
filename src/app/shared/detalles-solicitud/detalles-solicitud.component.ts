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

  
  verArchivo( archivo: string, nombre: string ): void {
    const ultimasTres = nombre.substr(-3);
    
    if ( ultimasTres == 'PDF' || ultimasTres == 'pdf' ) {

      const byteCharacters = archivo;
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const pdfData = new Blob([byteArray], { type: 'application/pdf' });
      const url = URL.createObjectURL(pdfData);
      const link = document.createElement('a');
      link.href = url;
      link.download = nombre;
      link.click();
      URL.revokeObjectURL(url);

    }
    else if ( ultimasTres == 'KMZ' || ultimasTres == 'kmz' ) {
      
      const byteCharacters = archivo;
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const pdfData = new Blob([byteArray], { type: 'application/kmz' });
      const url = URL.createObjectURL(pdfData);
      const link = document.createElement('a');
      link.href = url;
      link.download = nombre;
      link.click();
      URL.revokeObjectURL(url);

    }
    else if ( ultimasTres == 'JPG' || ultimasTres == 'jpg' ) {
      
      const byteCharacters = archivo;
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const pdfData = new Blob([byteArray], { type: 'application/jpeg' });
      const url = URL.createObjectURL(pdfData);
      const link = document.createElement('a');
      link.href = url;
      link.download = nombre;
      link.click();
      URL.revokeObjectURL(url);

    }
    else {
      // Mensaje
      this.snackBar.open('No se puede abrir este tipo de archivo', 'Cerrar', {
        duration: 5000 
      });
    }

    
  }

}
