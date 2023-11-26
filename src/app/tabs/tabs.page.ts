import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public isAdmin = false;

  constructor(private _authService: AuthService) {
    const auth: any = this._authService.getAuth();
    this.isAdmin = auth.msg.Rol == 'ADMIN';
  }
}
