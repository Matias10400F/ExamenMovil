import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  filtro = '';
  elementos = ['Apple', 'Orange', 'Banana', 'Mango'];
  elementosFiltrados = [...this.elementos];

  constructor() {}

  ngOnInit() {}

  filtrarElementos() {
    this.elementosFiltrados = this.filtro
      ? this.elementos.filter((item) =>
          item.toLowerCase().includes(this.filtro.toLowerCase())
        )
      : [...this.elementos];
  }
}
