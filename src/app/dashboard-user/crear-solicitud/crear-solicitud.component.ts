import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// interface
import { Nodos } from 'src/app/auth/interface/auth.interface';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';


@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {

  // Nodos a mostrar en el select
  nodos: Nodos[] = [ ];

  // Servicios
  constructor( 
    private fb               : FormBuilder,
    private geotechService   : GeotechService,
    private router           : Router,
    private snackBar         : MatSnackBar
  ) { }

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    evento     : [ '', [ Validators.required ] ],
    nivel      : [ '', [ Validators.required ] ],
    segmentoRed: [ '', [ Validators.required ] ],
    nodo       : [ '', [ Validators.required ] ],
    unidad     : [ '', [ Validators.required ] ],
    lider      : [ '', [ Validators.required ] ],
    ayudante   : [ '', [ Validators.required ] ],
    detalles   : [ '', [ Validators.required ] ]
  });

  // Lammada al servicio para mostrar los nodos
  ngOnInit(): void {
    this.geotechService.getNodos()
      .subscribe( response => {
        this.nodos = response;
      }
    );
  }

  // Enviar solicitud
  solicitar() {

    // Id del tecnico que realiza la solicitud
    const id_tecnico = parseInt(localStorage.getItem('id')??'');

    // Valores recibidos del formulario
    const evento      = this.formulario.get('evento')?.value;
    const nivel       = this.formulario.get('nivel')?.value;
    const segmentoRed = this.formulario.get('segmentoRed')?.value;
    const nodo        = this.formulario.get('nodo')?.value;
    const unidad      = this.formulario.get('unidad')?.value;
    const lider       = this.formulario.get('lider')?.value;
    const ayudante    = this.formulario.get('ayudante')?.value;
    const detalles    = this.formulario.get('detalles')?.value;

    // Se envia al servicio
    this.geotechService.solicitar( id_tecnico, evento, nivel, segmentoRed, nodo, unidad, lider, ayudante, detalles )
      .subscribe( respuesta => {
        
        // Mensaje
        this.snackBar.open('Solicitud enviada', 'Cerrar', {
          duration: 5000 
        });

        this.router.navigate(['/dashboard-user/solicitudes']);

      },
      error => {
        console.log(error);
      }
    );
  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors 
        && this.formulario.controls[campo].touched;
  }

}
