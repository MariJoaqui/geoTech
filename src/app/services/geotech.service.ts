import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { Usuarios } from '../auth/interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class GeotechService {

  // Url del servidor
  private url = 'http://localhost/geotech-server/procesos';
  // private url = 'geotech-server/procesos';

  // Servicios externos
  constructor( private http: HttpClient ) { }

  //Obtener usuarios
  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${ this.url }/getUsuarios.php`);
  }

  // Obtener usuario por id:
  getUsuarioPorId( id: number ): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${ this.url }/getUsuariosPorId.php/?id=${ id }`);
  }

}
