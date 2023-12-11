import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  //El router es un servicio de angular para navegar entre rutas

  canActivate(): Observable<boolean> {
    //El CanActivate es para proteger el ingreso de una ruta
    return this.afAuth.authState.pipe(
      take(1),
      //Esto es util para evitar escuchar continuamente los cambios de estado del usuario
      map((user) => !!user), // Transforma el valor emitido Convierte el objeto 'user' en un booleano
      tap((loggedIn) => {
        if (!loggedIn) {
          console.log('Acceso denegado');
          this.router.navigate(['/login']); // Redirige al usuario si no está autenticado
        }
      })
    );
  }
}