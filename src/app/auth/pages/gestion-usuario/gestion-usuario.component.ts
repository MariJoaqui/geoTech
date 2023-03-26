import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Servicios importados
import { ServicesService } from '../../services/services.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

// Componentes
import { RecuperarContrasenaComponent } from 'src/app/shared/recuperar-contrasena/recuperar-contrasena.component';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent {

  // Servicios
  constructor( 
    private dialog        : MatDialog,
    private fb            : FormBuilder,
    private serviceService: ServicesService,
    private snackBar      : MatSnackBar,
    private Validator     : ValidatorService,
  ) {}

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    correo: [ '', [ Validators.required, Validators.pattern( this.Validator.emailFormat ) ] ]
  });

  // Función para mostrar los mensajes de error
  campoNoValido( campo: string ) {
    return this.formulario.get(campo)?.invalid
        && this.formulario.get(campo)?.touched;
  }

  buscarCorreo() {

    // Obtener el correo electrónico del formulario
    const correo = this.formulario.get('correo')?.value;

    // Llamar al servicio que buscará el correo electrónico en la base de datos
    this.serviceService.validarCorreo(correo).subscribe((existe) => {

      if ( existe.success == true ) {

        this.dialog.open( RecuperarContrasenaComponent, {
          width: '90%',
          data: existe.usuario
        })

      }
      else {

        // Mensaje de error al ingresar
        this.snackBar.open('El correo ingresado no existe en la Base de Datos', 'Cerrar', {
          duration: 5000 
        });
        
      }
      
    },
    error => {
      console.log(error);
    });

  }

}
