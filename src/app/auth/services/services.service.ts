import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para validar el logeo
import { User } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // Url del servidor
  private url = 'http://localhost/geotech-server/conexion/proceso-login.php';

  // Servicios externos
  constructor( private http: HttpClient ) { }

  // Función de logeo
  login( username: string, password: string ): Observable<User> {

    // Objeto con los datos del formulario
    const datos = {
      username: username,
      password: password
    };
    
    // Petición POST al archivo PHP
    return this.http.post<User>( this.url, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }
}
