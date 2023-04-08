import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as html2pdf from 'html2pdf.js';

// Servicios
import { GeotechService } from 'src/app/services/geotech.service';

@Component({
  selector: 'app-descargar-pdf',
  templateUrl: './descargar-pdf.component.html',
  styleUrls: ['./descargar-pdf.component.css']
})
export class DescargarPdfComponent {

  filtrarPorFechas : any;
  usuario!         : any;
  fechaActual!     : Date;
  militaryTime!    : any;
  inicio           : any;
  fin              : any;

  ngOnInit(): void {
    this.fechaActual = new Date();

    const now = new Date();
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();
    let seconds = now.getSeconds().toString();

    // Formatear la hora para que tenga dos dígitos en caso de que sea menor que 10
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    // Crear la hora en formato de hora militar
    this.militaryTime = hours + ':' + minutes + ':' + seconds;
  
    // obtener el id del usuario guardado en el localStorage
    const id = parseInt(localStorage.getItem('id') || '');

    this.geotechService.getUsuarioPorId( id ).subscribe( usuario => {
      this.usuario = usuario;
    });

  }

  constructor(
    private geotechService : GeotechService,
    private dialogRef: MatDialogRef<DescargarPdfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.filtrarPorFechas = data.fechas;
    this.inicio = data.inicio;
    this.fin = data.fin;
  }

  descargar() {
    const element = document.getElementById("descargar");
    html2pdf().from(element).save();
  }
  
}
