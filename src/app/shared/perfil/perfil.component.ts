import { Component } from '@angular/core';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  usuario!: any;

  constructor( private geotechService: GeotechService ) { }

  ngOnInit(): void {
    // obtener el idi del usuario guardado en el localStorage
    const id = parseInt(localStorage.getItem('id') || '');

    this.geotechService.getUsuarioPorId( id ).subscribe( usuario => {
      this.usuario = usuario;
    });
  }
}
