import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import * as constans from './constans';
import { RegisterDataService } from '../services/register-data.service';
import { ToastService } from '../services/toast.service';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public form!: FormGroup;
  public constanstComponent = constans;
  iterableArray: any[] = new Array(100);

  public loader = false;

  constructor(
    private formBuilder: FormBuilder,
    private _registerDataService: RegisterDataService,
    private _toastService: ToastService,
    private _authService: AuthService,
    private navCtrl: NavController,
  ) {
    this.form = this.formBuilder.group({
      Age: new FormControl('', Validators.required),
      Gender: new FormControl('', Validators.required),
      Item_Purchased: new FormControl('', Validators.required),
      Category: new FormControl('', Validators.required),
      Purchase_Amount: new FormControl('', Validators.required),
      Location: new FormControl('', Validators.required),
      Size: new FormControl('', Validators.required),
      Color: new FormControl('', Validators.required),
      Season: new FormControl('', Validators.required),
      Review_Rating: new FormControl('', Validators.required),
      Subscription_Status: new FormControl('', Validators.required),
      Payment_Method: new FormControl('', Validators.required),
      Shipping_Type: new FormControl('', Validators.required),
      Discount_Applied: new FormControl('', Validators.required),
      Promo_Code_Used: new FormControl('', Validators.required),
      Previous_Purchases: new FormControl('', Validators.required),
      Preferred_Payment_Method: new FormControl('NA', Validators.required),
      Frequency_of_Purchases: new FormControl('', Validators.required),
      Estado: new FormControl('Activo', Validators.required),
    });
  }

  public save() {
    this.loader = true;
    this._registerDataService.register(this.form.value).subscribe({
      next: async (response) => {
        await this._toastService.presentToast(
          'Informacion guardada exitosamente!',
          2000,
          'bottom'
        );
        this.loader = false;
        this.form.reset();
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

  closeSesion(){
    this._authService.closeSesion()
    this.navCtrl.navigateBack('/');
  }

}
