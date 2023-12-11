import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  //Cuando se llama a logout se ejecuta la funcion de cierre de sesión de AuthService
  logout() {
    this.authService
      .logout()
      //Llama al metodo logout de AuhService que deberia cerra la sesión del usuario de FireBase
      .then(() => {
        this.router.navigate(['/login']);
        //Una vez que la promesa de cierre de sesión se resuelve se dirige al usuario a la página de login
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
    //Captura y maneja cualquier error que pueda ocurrir durante el proceso de cierre de sesión
  }

  ngOnInit() {}
}
