import { Component, OnInit } from '@angular/core';

interface Notificacion {
  titulo: string;
  mensaje: string;
  fecha: Date;
  imagen: string;
}

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  notificaciones: Notificacion[] = [
    {
      titulo: 'Nuevo mensaje',
      mensaje: 'Tienes un consejo de organizar tu día',
      fecha: new Date(),
      imagen: 'assets/icon/avatar.png',
    },
    // ... más notificaciones
  ];

  constructor() {}

  ngOnInit() {}
}
