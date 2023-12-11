import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {}

  async login(user: User) {
    console.log('Iniciando sesión...');

    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: 'Espere un momento por favor..',
      });
      await loader.present();

      try {
        console.log('Antes de signInWithEmailAndPassword');
        await this.afAuth
          .signInWithEmailAndPassword(user.email, user.password)
          .then(() => {
            console.log('Inicio de sesión exitoso.');

            this.navCtrl.navigateRoot('home');
          });
        console.log('Después de signInWithEmailAndPassword');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);

        let errorMessage = 'Credenciales de inicio de sesión incorrectas';

        this.showToast(errorMessage);
      }

      await loader.dismiss();
    }
  }

  formValidation() {
    if (!this.user.email) {
      this.showToast('Ingrese un correo');
      return false;
    }
    if (!this.user.password) {
      this.showToast('Ingrese una contraseña');
      return false;
    }
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
}
