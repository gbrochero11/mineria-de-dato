import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public form!: FormGroup;

  public loader = false;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      Identificacion: new FormControl('', [Validators.required]),
      Contraseña: new FormControl('', [Validators.required]),
    });
  }

  public login() {
    this.loader = true;
    this._authService.login(this.form.value).subscribe({
      next: (response) => {
        this.loader = false;
        this._authService.setAuth(response);
        this.navCtrl.navigateForward('/home/register-data');
      },
      error: async (response) => {
        this.loader = false;
        await this._toastService.presentToast(
          'Uups! Ha ocurrido un error, intentelo mas tarde.',
          2000,
          'bottom'
        );
      },
    });
  }

  public register() {
    this.navCtrl.navigateForward('/register');
  }
}
