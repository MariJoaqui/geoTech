import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {

  searchText: string = '';
 
  users: any[] = [
    { name: 'John Doe', username: 'aaaaaa', role: 'admin' },
    { name: 'Jane Smith', username: 'ssssss', role: 'user' },
    { name: 'Bob Johnson', username: 'ddddddd', role: 'user' },
 
  ];

  get filteredUsers() {
    return this.users.filter(user => {
      return user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.username.toLowerCase().includes(this.searchText.toLowerCase()) ||
             user.role.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  
}
