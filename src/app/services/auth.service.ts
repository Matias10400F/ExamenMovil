import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) { }
  // AngularFireAuth es un servicio proporcionado por AngularFire para interactuar con el sistema de autenticacion de firebase
  //Y es privado ya que solo sea accesible para este servicio

  //El metodo logout es responsable de cerrar la sesión del usuario
  logout(): Promise<void> {
    return this.afAuth.signOut();
    // el metodo sign0ut es del sevicio AngularFireAuth este metodo cierra sesión del usuario actual en Firebase y devuelve una promesa
  }
  //Este metodo determina si hay un usuario actualmente autenticado
  isAuthenticatedUser(): Promise<boolean> {
    return new Promise((resolve) => {
      this.afAuth.authState.subscribe((user) => resolve(!!user));
      //El authState es un observable que emite el estado de autenticación del usuario
      //Si un usuario esta autenticado emite un obj de usuario y si no emite null
    });
  }
}
