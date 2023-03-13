import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// Servicios importados
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { ServicesService } from '../../services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Servicios
  constructor( 
    private fb       : FormBuilder,
    private router   : Router,
    private services : ServicesService,
    private snackBar : MatSnackBar,
    private Validator: ValidatorService,
  ) {}

  // Formulario y validaciones
  formulario: FormGroup = this.fb.group({  
    username: [ '', [ Validators.required, Validators.minLength(4), Validators.pattern( this.Validator.userFormat ) ] ],
    password: [ '', [ Validators.required, Validators.minLength(8) ] ]
  });

  // Función para mostrar los mensajes de error
  campoNoValido( campo: string ) {
    return this.formulario.get(campo)?.invalid
        && this.formulario.get(campo)?.touched;
  }

  // Función para el inicio de sesión
  iniciarSesion() {

    // Valores obtenidos del formulario
    const username = this.formulario.get('username')?.value;
    const password = this.formulario.get('password')?.value;

    // Envía y recibe una respuesta del servidor
    this.services.login( username, password ).subscribe( respuesta => {

      // Validar el ingreso
      if ( respuesta.success == true ) {

        // Definir las rutas según el tipo de usuario
        if ( respuesta.usuario.rol == 0 ) {
          this.router.navigate(['/dashboard-admin']);
        }
        else {
          this.router.navigate(['/dashboard-user']);
        }

      } 
      else {

        // Mensaje de error al ingresar
        this.snackBar.open('Los datos ingresados son incorrectos', 'Cerrar', {
          duration: 5000 
        });

      }
    },
    error => {
      console.log(error);
    });
  }

}
