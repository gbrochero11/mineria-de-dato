import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private _authService: AuthService,
    private navCtrl: NavController,
    ) {}

  closeSesion(){
    this._authService.closeSesion()
    this.navCtrl.navigateBack('/');
  }

}
