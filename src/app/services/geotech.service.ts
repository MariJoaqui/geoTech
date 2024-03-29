import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { Nodos, Solicitudes, Usuarios } from '../auth/interface/auth.interface';

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
    return this.http.get<Usuarios[]>(`${ this.url }/getUsuariosPorId.php?id=${ id }`);
  }

  // Obtener solicitudes por id_tecnico:
  getSolicitudPorId( id: number ): Observable<Solicitudes[]> {
    return this.http.get<Solicitudes[]>(`${ this.url }/getSolicitudPorId.php?id_tecnico=${ id }`);
  }

  // Obtener solicitudes por id:
  getSolicitudesPorId( id: number ): Observable<Solicitudes[]> {
    return this.http.get<Solicitudes[]>(`${ this.url }/getSolicitudesPorId.php?id=${ id }`);
  }

  // Anular solicitudes:
  anularSolicitud( id: number ): Observable<Solicitudes> {
    return this.http.get<Solicitudes>(`${ this.url }/anularSolicitud.php?id=${ id }`);
  }

  // Obtener solicitudes por estado:
  getSolicitudesPorEstado( estado: string ): Observable<Solicitudes[]> {
    return this.http.get<Solicitudes[]>(`${ this.url }/getSolicitudesPorEstado.php?estado=${ estado }`);
  }

  // Eliminar solicitudes por anuladas:
  eliminarSolicitudAnulada( id: number ): Observable<Solicitudes> {
    return this.http.get<Solicitudes>(`${ this.url }/eliminar.php?id=${ id }`);
  }

  // Eliminar usuario:
  eliminarUsuario( id: number ): Observable<any> {
    return this.http.delete<any>(`${ this.url }/eliminarUsuario.php?id=${ id }`);
  }

  // Obtener los nodos
  getNodos(): Observable<Nodos[]> {
    return this.http.get<Nodos[]>(`${ this.url }/getNodos.php`);
  }

  // Insertar las solicitudes en la base de datos:
  solicitar( 
    id_tecnico : number,
    evento     : string, 
    nivel      : string,
    segmentoRed: string,
    nodo       : number,
    unidad     : string, 
    lider      : string,
    ayudante   : string,
    detalles   : string
  ): Observable<Solicitudes> {

    // Objeto con los datos del formulario
    const datos = {
      id_tecnico  : id_tecnico,
      evento      : evento,
      nivel       : nivel,
      segmentoRed : segmentoRed,
      nodo        : nodo,
      unidad      : unidad,
      lider       : lider,
      ayudante    : ayudante,
      detalles    : detalles
    };
    
    // Petición POST al archivo PHP
    return this.http.post<Solicitudes>( `${ this.url }/crearSolicitud.php`, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  // Actualizar usuarios (Administrador)
  editarUsuarios(
    id       : number,
    nombre   : string,
    apellido : string,
    correo   : string,
    usuario  : string,
    clave    : string,
    rol      : string 
  ): Observable<any> {

    // Objeto con los datos del formulario
    const datos = {
      id       : id,
      nombre   : nombre,
      apellido : apellido,
      correo   : correo,
      usuario  : usuario,
      clave    : clave,
      rol      : rol
    };
    
    // Petición POST al archivo PHP
    return this.http.post<any>( `${ this.url }/editarUsuarios.php`, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  editarPerfil(
    id       : number,
    nombre   : string,
    apellido : string,
    correo   : string,
    usuario  : string
  ): Observable<any> {

    // Objeto con los datos del formulario
    const datos = {
      id       : id,
      nombre   : nombre,
      apellido : apellido,
      correo   : correo,
      usuario  : usuario
    };
    
    // Petición POST al archivo PHP
    return this.http.post<any>( `${ this.url }/editarPerfil.php`, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  // Ingresar usuario
  agregarUsuario(
    nombre   : string,
    apellido : string,
    correo   : string,
    usuario  : string,
    clave    : string,
    rol      : string 
  ): Observable<any> {

    // Objeto con los datos del formulario
    const datos = {
      nombre   : nombre,
      apellido : apellido,
      correo   : correo,
      usuario  : usuario,
      clave    : clave,
      rol      : rol
    };
    
    // Petición POST al archivo PHP
    return this.http.post<any>( `${ this.url }/nuevoUsuario.php`, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  // Subir archivos
  subirArchivos( id_solicitud: number, nombre: string, archivo: string ): Observable<any> {

    const datos = {
      id_solicitud : id_solicitud,
      nombre       : nombre,
      archivo      : archivo
    }

    // Petición POST al archivo PHP
    return this.http.post<any>(`${this.url}/subirArchivos.php`, JSON.stringify(datos));
  }

  // Agregar observaciones
  agregarObservaciones( id_solicitud: number, observacion: string ): Observable<any> {

    // Objeto con los datos del formulario
    const datos = {
      id_solicitud : id_solicitud,
      observacion  : observacion
    };
    
    // Petición POST al archivo PHP
    return this.http.post<any>( `${ this.url }/agregarObservaciones.php`, JSON.stringify(datos), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  // Obtener solicitudes por id_tecnico:
  getArchivosPorId( id_solicitud: number ): Observable<any> {
    return this.http.get<any>(`${ this.url }/getArchivosPorId.php?id_solicitud=${ id_solicitud }`);
  }

}
