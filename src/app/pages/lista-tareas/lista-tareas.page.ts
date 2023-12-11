import { Component, OnInit } from '@angular/core';
interface Tarea {
  titulo: string;
  descripcion: string;
  fecha: Date;
  completada: boolean;
}
@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.page.html',
  styleUrls: ['./lista-tareas.page.scss'],
})
export class ListaTareasPage implements OnInit {
  tareas: Tarea[] = [
    {
      titulo: 'Tarea muy importante',
      descripcion: 'Esta es una descripción larga para la tarea.',
      fecha: new Date('2018-12-22'),
      completada: false,
    },
    {
      titulo: 'Tarea pendiente',
      descripcion: '',
      fecha: new Date('2018-10-08'),
      completada: false,
    },
    {
      titulo: 'Tarea completada',
      descripcion: '',
      fecha: new Date('2018-10-08'),
      completada: true,
    },
    // ... más tareas
  ];
  constructor() {}

  ngOnInit() {}
}
