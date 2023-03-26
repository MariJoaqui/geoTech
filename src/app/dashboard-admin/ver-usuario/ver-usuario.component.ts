import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent {

  usuario!: any;

  constructor( 
    private activateRoute: ActivatedRoute,
    private geotechService: GeotechService 
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap( ({ id }) => this.geotechService.getUsuarioPorId( id ) )
    )
    .subscribe( usuario => {
      this.usuario = usuario;
    });
  }

}
