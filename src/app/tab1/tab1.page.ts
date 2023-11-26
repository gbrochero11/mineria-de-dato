import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  public save(){

  }
}
