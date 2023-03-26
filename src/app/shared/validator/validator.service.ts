import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // Validar usuario
  userFormat : string = '([a-z]+)';

  // Validar correo
  emailFormat: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // Validar nombres
  nombreFormat: string = "^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]$";

  camposIguales( password1: string, password2: string ) {

  }
  constructor() { }
}
