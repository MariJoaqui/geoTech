import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private geotechService : GeotechService
  ) { }

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    archivo       : [ '', [ Validators.required ] ],
    observaciones : [ '', [ Validators.required ] ]
  });

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap( ({ id }) => this.geotechService.getSolicitudesPorId( id ) )
    )
    .subscribe( solicitud => this.solicitud = solicitud );
  }

  // Enviar respuesta
  enviar() {
    const archivo = this.formulario.get('archivo')?.value;
    console.log(archivo);
    
  }

}
