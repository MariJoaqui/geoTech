import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {

  rol: any[] = [
    { name: 'administrador', value: 0 },
    { name: 'usuario', value: 1 }
  ]
  
}
