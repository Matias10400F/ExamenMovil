// src/app/pages/rick-and-morty/rick-and-morty.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.page.html',
  styleUrls: ['./rick-and-morty.page.scss'],
})
export class RickAndMortyPage implements OnInit {
  public characters: any[] = [];
  private page = 1; // Página inicial

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    const url = `https://rickandmortyapi.com/api/character/?page=${this.page}`;

    this.http.get(url).subscribe(
      (data: any) => {
        this.characters = [...this.characters, ...data.results];
        console.log('Personajes de Rick and Morty:', this.characters);
      },
      (error) => {
        console.error('Error al obtener personajes de Rick and Morty:', error);
      }
    );
  }

  loadMore(event: any) {
    this.page++;
    this.getCharacters();
    event.target.complete();

    // Si ya no hay más personajes, desactivar el infinite scroll
    if (this.page >= 34) {
      event.target.disabled = true;
    }
  }

  showCharacterDetails(character: any) {
    // Aquí podrías implementar la navegación a una página de detalles del personaje
    // o mostrar los detalles de alguna otra manera.
    console.log('Detalles del personaje:', character);
  }
}
