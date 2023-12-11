import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  async create(collection: string, dato: any): Promise<any> {
    try {
      // Intenta agregar el documento a la colección especificada y devuelve el resultado
      const docRef = await this.firestore.collection(collection).add(dato);
      return docRef;
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la operación
      console.error('Error al agregar documento a Firestore:', error);
      throw error; // Opcionalmente, puedes relanzar el error para manejarlo más arriba en la cadena
    }
  }
}
