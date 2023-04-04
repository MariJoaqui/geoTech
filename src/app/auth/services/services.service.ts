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
  private urlLogin = 'http://localhost/geotech-server/conexion/proceso-login.php';
  // private urlLogin = 'geotech-server/conexion/proceso-login.php';
  private urlCorreo = 'http://localhost/geotech-server/procesos/validarCorreo.php';
  // private urlCorreo = 'geotech-server/procesos/validarCorreo.php';
  private urlClave = 'http://localhost/geotech-server/procesos/cambiarClave.php';
  // private urlClave = 'geotech-server/procesos/cambiarClave.php';

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
    return this.http.post<User>( this.urlLogin, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  // Llamado a la Base de datos para ver si existe el correo
  validarCorreo( correo: string ): Observable<any> {

    const datos = {
      correo: correo
    }

    return this.http.post<any>( this.urlCorreo, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Cambiar clave
  cambiarclave( id: number, clave: string ): Observable<any> {

    const datos = {
      id     : id,
      clave : clave
    }

    return this.http.post<any>( this.urlClave, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
