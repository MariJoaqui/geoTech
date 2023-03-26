import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Interface
import { Usuarios } from 'src/app/auth/interface/auth.interface';
import { ValidatorService } from '../validator/validator.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {

  constructor( 
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private dialogRef: MatDialogRef<RecuperarContrasenaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuarios 
  ) { }
  
  formulario: FormGroup = this.fb.group({
    password1: [ '', [ Validators.required, Validators.minLength(8) ] ],
    password2: [ '', [ Validators.required ] ]
  });

  campoNoValido( campo: string ) {
    return this.formulario.get(campo)?.invalid
        && this.formulario.get(campo)?.touched;
  }
}
