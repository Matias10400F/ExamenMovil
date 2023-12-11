import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa el plugin de day grid

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  calendarOptions: any; // Cambiado de calendarPlugins a calendarOptions

  constructor() {}

  ngOnInit() {
    this.calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      // ... otras opciones que desees configurar
    };
  }
}
