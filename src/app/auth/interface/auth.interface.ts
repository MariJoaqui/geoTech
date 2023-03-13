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
  rol     : number
}