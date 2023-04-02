import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  rol = [
    { name: 'administrador' },
    { name: 'usuario' }
  ]

  usuario!: any;
  private id!: number;

  // Servicios
  constructor( 
    private activateRoute  : ActivatedRoute,
    private fb             : FormBuilder,
    private geotechService : GeotechService,
    private snackBar       : MatSnackBar
  ) { }

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    nombre   : [ '' ],
    apellido : [ '' ],
    correo   : [ '' ],
    usuario  : [ '' ],
    clave    : [ '' ],
    rol      : [ '' ],
  });

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap( ({ id }) => this.geotechService.getUsuarioPorId( id ) )
    )
    .subscribe( usuario => {
      this.usuario = usuario;
      this.id = this.usuario.id;
    });
  }

  // Actualizar
  actualizar() {
    const nombre   = this.formulario.get('nombre')?.value;
    const apellido = this.formulario.get('apellido')?.value;
    const correo   = this.formulario.get('correo')?.value;
    const usuario  = this.formulario.get('usuario')?.value;
    const clave    = this.formulario.get('clave')?.value;
    const rol      = this.formulario.get('rol')?.value;
    
    if ( nombre == '' && apellido == '' && correo == '' && usuario == '' && clave == '' && rol == '' ) {
      
      // Mensaje 
      this.snackBar.open('No se agregaron datos que actualizar', 'Cerrar', {
        duration: 5000 
      });
      
    }
    else {

      // Llamado al servicio
      this.geotechService.editarUsuarios( this.id, nombre, apellido, correo, usuario, clave, rol )
        .subscribe( respuesta => {
          // Mensaje 
          this.snackBar.open('Cambios guardados exitosamente', 'Cerrar', {
            duration: 5000 
          });
        })

    }
    
  }
  
}
