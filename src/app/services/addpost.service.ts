import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  LoadingController,
  ToastController,
  NavController,
} from '@ionic/angular';
import { Post } from 'src/app/models/post.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AddpostService {
  post = {} as Post;
  public currentTime: string = '';

  constructor(
    private navcontroller: NavController,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private localStorageService: LocalStorageService
  ) {}

  async createPost(post: Post) {
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: 'Espere un momento por favor..',
      });
      await loader.present();

      try {
        // Almacena en Firestore
        await this.firestore.collection('posts').add(post);

        // Almacena localmente
        this.localStorageService.addPost(post);

        // Limpiar los valores del formulario después de agregar
        this.post = {} as Post;
      } catch (e: any) {
        e.message = 'Mensaje de error en post';
        let errorMessage = e.message || e.getLocalizedMessage();

        this.showToast(errorMessage);
      }

      await loader.dismiss();

      this.navcontroller.navigateRoot('home');
    }
  }

  formValidation() {
    if (!this.post.title) {
      this.showToast('Ingrese un título');
      return false;
    }

    if (!this.post.details) {
      this.showToast('Ingrese una descripción');
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
