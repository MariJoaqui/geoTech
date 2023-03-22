import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  rol: any[] = [
    { name: 'administrador', value: 0 },
    { name: 'usuario', value: 1 }
  ]

  usuario!: any;

  constructor( 
    private activateRoute: ActivatedRoute,
    private geotechService: GeotechService ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap( ({ id }) => this.geotechService.getUsuarioPorId( id ) )
    )
    .subscribe( usuario => {
      this.usuario = usuario;
    });
  }
  
}
