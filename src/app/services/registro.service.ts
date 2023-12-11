import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../app/models/user.model';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {}

  async registro(user: User) {
    // Es importante pasar el objeto 'user' directamente a la validación
    if (this.formValidation(user)) {
      let loader = await this.loadingCtrl.create({
        message: 'Espere un momento por favor..',
      });
      await loader.present();

      try {
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );

        // Aquí se asume que el objeto 'user' ya no contiene la contraseña.
        // La contraseña nunca debe ser guardada manualmente en la base de datos.
        if (userCredential.user) {
          await this.firestore
            .collection('usuarios')
            .doc(userCredential.user.uid)
            .set({
              email: user.email,
              // Otros campos del usuario si los tienes
            });

          // Redirigir al usuario a la página de inicio de sesión (login) después del registro
          this.showToast('Usuario registrado correctamente');
          this.navCtrl.navigateRoot('login'); // Asegúrate de que 'login' sea la ruta correcta a tu página de inicio de sesión
        }
      } catch (error: any) {
        // El manejo de errores es importante para informar al usuario de lo que salió mal
        let errorMessage =
          error.message || 'Ocurrió un error durante el registro.';
        this.showToast(errorMessage);
      } finally {
        // Esto asegura que el loader siempre se cierre, ocurra un error o no
        await loader.dismiss();
      }
    }
  }

  // Asegúrate de que la validación reciba el objeto 'user' para hacer su trabajo
  formValidation(user: User) {
    if (!user.email) {
      this.showToast('Ingrese un correo');
      return false;
    }
    if (!user.password) {
      this.showToast('Ingrese una contraseña');
      return false;
    }
    // Agregar validación de formato de correo y fuerza de contraseña según sea necesario
    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 5000,
      })
      .then((toastData) => toastData.present());
  }

  // Este método obtiene todos los usuarios, lo cual puede ser un riesgo de seguridad si contiene información sensible.
  // Asegúrate de restringir el acceso a este método solo a administradores o roles similares.
  getUsers(): Observable<any[]> {
    return this.firestore.collection('usuarios').valueChanges();
  }

  // Este método permite la descarga de los datos de todos los usuarios.
  // Nuevamente, esto debería estar restringido a administradores.
  downloadUsersJson() {
    this.getUsers().subscribe((usuarios) => {
      const contenidoJson = JSON.stringify(usuarios, null, 2);
      const blob = new Blob([contenidoJson], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'usuarios.json';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
