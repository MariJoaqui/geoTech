import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

// Interface
import { Usuarios } from 'src/app/auth/interface/auth.interface';

// Componentes
import { AgregarUsuarioComponent } from 'src/app/shared/agregar-usuario/agregar-usuario.component';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  // Variables
  searchText: string = '';
 
  // Arreglo para obtener los usuarios de la base dde datos
  users: Usuarios[] = [];

  // Servicios
  constructor(
    private dialog         : MatDialog,
    private geotechService : GeotechService
  ) { }

  // Lammada al servicio para mostrar los usuarios
  ngOnInit(): void {
    this.geotechService.getUsuarios()
      .subscribe( response => {
        this.users = response;
      }
    );
  }

  get filteredUsers() {
    return this.users.filter(user => {
      return user.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.usuario.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.rol.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  agregarUsuario() {
    this.dialog.open( AgregarUsuarioComponent, {
      width: '90%'
    })
  }
  
}
