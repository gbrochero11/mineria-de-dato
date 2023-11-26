import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _registerService: RegisterService,
    private _toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      Identificacion: new FormControl('', [Validators.required]),
      Contraseña: new FormControl('', [Validators.required]),
      Rol: new FormControl('', [Validators.required]),
    });
  }

  public register() {
    this._registerService.register(this.form.value).subscribe({
      next: async (response) => {
        await this._toastService.presentToast(
          'Usuario registrado exitosamente!',
          2000,
          'bottom'
        );
        this.form.reset();
      },
      error: async (response) => {
        await this._toastService.presentToast(
          'Uups! Ha ocurrido un error, intentelo mas tarde.',
          2000,
          'bottom'
        );
      },
    });
  }
}
