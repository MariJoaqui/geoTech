import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-atender-solicitudes',
  templateUrl: './atender-solicitudes.component.html',
  styleUrls: ['./atender-solicitudes.component.css']
})
export class AtenderSolicitudesComponent {

  solicitud!: any;

  constructor( 
    private fb             : FormBuilder,
    private activateRoute  : ActivatedRoute,
    private geotechService : GeotechService,
    private snackBar       : MatSnackBar,
    private router         : Router,
  ) { }

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    observaciones : [ '', [ Validators.required ] ]
  });

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap( ({ id }) => this.geotechService.getSolicitudesPorId( id ) )
    )
    .subscribe( solicitud => this.solicitud = solicitud );
  }

  // Arreglo para guardar los archivos
  binaryStrings: string[] = [];
  nombres      : string[] = [];

  // Vuelve el archivo binario para subirlo en la bdd
  onFileSelected( event: any ) {
    const selectedFiles = event.target.files;
    
    for ( let i = 0; i < selectedFiles.length; i++ ) {
      const file = selectedFiles[i];
      const reader = new FileReader();
      reader.readAsDataURL(selectedFiles[i]);
      reader.onload = () => {
        const base64 = reader.result!.toString().split(',')[1];
        this.binaryStrings.push(base64);
        this.nombres.push(file.name);
      };
    }
  }

  // Enviar respuesta
  enviar() {
    const id_solicitud = this.solicitud.id;
    const observacion  = this.formulario.get('observaciones')?.value;

    for( let i = 0; i < this.binaryStrings.length; i++ ){
        
      this.geotechService.subirArchivos( id_solicitud, this.nombres[i], this.binaryStrings[i] ).subscribe( respuesta => {
        if ( respuesta.success ) {

          // Mensaje
          this.snackBar.open('Respuesta enviada', 'Cerrar', {
            duration: 5000 
          });

          this.router.navigate(['/dashboard-admin/solicitudes-pendientes']);
        }
      })
    }

    this.geotechService.agregarObservaciones( id_solicitud, observacion ).subscribe( respuesta => {
      console.log(respuesta);
    })
  }

}
