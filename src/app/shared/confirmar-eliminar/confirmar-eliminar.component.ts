import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-confirmar-eliminar',
  templateUrl: './confirmar-eliminar.component.html',
  styleUrls: ['./confirmar-eliminar.component.css']
})
export class ConfirmarEliminarComponent {

  id!: number;

  constructor( 
    private geotechService : GeotechService,
    private snackBar       : MatSnackBar,
    private dialogRef      : MatDialogRef<ConfirmarEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.id = data;
  }

  eliminar() {
    this.geotechService.eliminarUsuario( this.id )
      .subscribe( respuesta => {
        
        console.log(respuesta);

        // Mensaje
        this.snackBar.open('Eliminado', 'Cerrar', {
          duration: 10000,
        });

        this.dialogRef.close();
        window.location.reload();

      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
