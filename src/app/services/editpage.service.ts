import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EditpageService {
  post = {} as Post;
  id: any;
  constructor(
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private router: Router,
    private toasCtrl: ToastController
  ) {}
  ngOnInit() {}

  async getPostById(id: string) {
    let loader = await this.loadingCtrl.create({
      message: 'Espere un momento por favor...',
    });
    await loader.present();

    this.firestore
      .doc('posts/' + id)
      .valueChanges()
      .subscribe((data: any) => {
        const { title, details } = data as { title: string; details: string };
        this.post.title = data.title;
        this.post.details = data.details;

        loader.dismiss();
      });
    await loader.dismiss();
  }

  async updatePost(post: Post) {
    let loader = await this.loadingCtrl.create({
      message: 'Actualizando...',
    });
    await loader.present();

    this.firestore
      .doc('posts/' + this.id)
      .update(post)
      .then(() => {
        console.log('Elementos actualizados correcto');
        this.router.navigate(['/home']);
        loader.dismiss();
      })
      .catch((error) => {
        console.log('Error al actualizar: ', error);
        loader.dismiss;
      });
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
    this.toasCtrl
      .create({
        message: message,
        duration: 5000,
      })
      .then((toastData) => toastData.present());
  }
}
