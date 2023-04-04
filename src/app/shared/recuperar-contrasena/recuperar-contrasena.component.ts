import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// Interface
import { ServicesService } from 'src/app/auth/services/services.service';
import { ValidatorService } from '../validator/validator.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {

  id!: number;

  constructor( 
    private fb               : FormBuilder,
    private snackBar         : MatSnackBar,
    private router           : Router,
    private serviceService   : ServicesService,
    private validatorService : ValidatorService,
    private dialogRef: MatDialogRef<RecuperarContrasenaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) { 
    this.id = data;
  }
  
  formulario: FormGroup = this.fb.group({
    password: [ '', [ Validators.required, Validators.minLength(8) ] ]
  });

  campoNoValido( campo: string ) {
    return this.formulario.get(campo)?.invalid
        && this.formulario.get(campo)?.touched;
  }

  guardar() {
    
    // Obtener el correo electrónico del formulario
    const clave = this.formulario.get('password')?.value;
    
    // Llamar al servicio que buscará el correo electrónico en la base de datos
    this.serviceService.cambiarclave( this.id, clave ).subscribe(respuesta => {
    
      // Mensaje
      this.snackBar.open('Cambios guardados', 'Cerrar', {
        duration: 5000 
      });

      this.dialogRef.close();
      this.router.navigate(['']); 
    
    },
    error => {
      console.log(error);
    });

  }
}
