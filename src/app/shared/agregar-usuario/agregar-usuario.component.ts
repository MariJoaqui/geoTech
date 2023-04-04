import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {

  rol: any[] = [
    { name: 'administrador' },
    { name: 'usuario' }
  ]

  // Servicios
  constructor( 
    private fb             : FormBuilder,
    private geotechService : GeotechService,
    private snackBar       : MatSnackBar,
    private Validator      : ValidatorService,
  ) { }

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    nombre   : [ '', [ Validators.required] ],
    apellido : [ '', [ Validators.required] ],
    correo   : [ '', [ Validators.required, Validators.pattern( this.Validator.emailFormat ) ] ],
    usuario  : [ '', [ Validators.required, Validators.minLength(4), Validators.pattern( this.Validator.userFormat )] ],
    clave    : [ '', [ Validators.required, Validators.minLength(8) ] ],
    rol      : [ '', [ Validators.required] ],
  });

  // Función para mostrar los mensajes de error
  campoEsValido( campo: string ) {
    return this.formulario.get(campo)?.invalid
        && this.formulario.get(campo)?.touched;
  }

  guardar() {
    const nombre   = this.formulario.get('nombre')?.value;
    const apellido = this.formulario.get('apellido')?.value;
    const correo   = this.formulario.get('correo')?.value;
    const usuario  = this.formulario.get('usuario')?.value;
    const clave    = this.formulario.get('clave')?.value;
    const rol      = this.formulario.get('rol')?.value;

    this.geotechService.agregarUsuario( nombre, apellido, correo, usuario, clave, rol )
      .subscribe( respuesta =>  {
        // Mensaje 
        this.snackBar.open('Usuario agregado', 'Cerrar', {
          duration: 10000 
        });

        window.location.reload();
      }
    );
  }
  
}
