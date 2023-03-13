import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // Validar usuario
  userFormat: string = '([a-z]+)';

  constructor() { }
}
