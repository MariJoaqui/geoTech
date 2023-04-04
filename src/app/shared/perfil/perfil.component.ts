import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  usuario!: any;

  // Servicios
  constructor( 
    private fb             : FormBuilder,
    private geotechService : GeotechService,
    private snackBar       : MatSnackBar 
  ) { }

  ngOnInit(): void {
    // obtener el id del usuario guardado en el localStorage
    const id = parseInt(localStorage.getItem('id') || '');

    this.geotechService.getUsuarioPorId( id ).subscribe( usuario => {
      this.usuario = usuario;
    });
  }

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    nombre   : [ '' ],
    apellido : [ '' ],
    correo   : [ '' ],
    usuario  : [ '' ],
  });

  actualizar() {

    // obtener el id del usuario guardado en el localStorage
    const id = parseInt(localStorage.getItem('id') || '');

    // Valores del formulario
    const nombre   = this.formulario.get('nombre')?.value;
    const apellido = this.formulario.get('apellido')?.value;
    const correo   = this.formulario.get('correo')?.value;
    const usuario  = this.formulario.get('usuario')?.value;
    
    if ( nombre == '' && apellido == '' && correo == '' && usuario == '' ) {
      
      // Mensaje 
      this.snackBar.open('No se agregaron datos que actualizar', 'Cerrar', {
        duration: 5000 
      });
      
    }
    else {

      // Llamado al servicio
      this.geotechService.editarPerfil( id, nombre, apellido, correo, usuario )
        .subscribe( respuesta => {
          // Mensaje 
          this.snackBar.open('Cambios guardados exitosamente', 'Cerrar', {
            duration: 5000 
          });
        })

    }

  }

}
