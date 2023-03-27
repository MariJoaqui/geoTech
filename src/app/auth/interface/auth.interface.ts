// Interface para el tipado del objeto recibido
export interface User {
  username: string,
  password: string,
  success : boolean,
  usuario : UserBdd
}

export interface UserBdd {
  id      : number,
  nombre  : string,
  apellido: string,
  rol     : string
}

// Usuarios
export interface Usuarios {
  id      : number,
  rol     : string,
  nombre  : string,
  apellido: string,
  correo  : string,
  usuario : string,
  clave   : string
}

// Nodos
export interface Nodos {
  id    : number,
  nombre: string
}

// Solicitudes
export interface Solicitudes {
  id?         : number,
  id_tecnico? : number,
  evento      : string,
  nivel       : string,
  red         : string,
  nodo        : number,
  unidad      : string,
  lider       : string,
  ayudante    : string,
  detalles    : string,
  estado?     : string,
  fecha?      : string,
  hora?       : string
}