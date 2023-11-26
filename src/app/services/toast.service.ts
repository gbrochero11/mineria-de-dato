import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  async presentToast(message: string, duration: number, position: "top" | "bottom" | "middle" | undefined) {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
    });
    toast.present()
  }
}
