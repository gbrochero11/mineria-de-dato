import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private navController: NavController,
    private _authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const auth = this._authService.getAuth();

    if (!!!auth) {
      this.navController.navigateBack('');
      return false;
    } else {
      const rol = auth.Rol;
      if (rol == 'ADMIN') {
        this.navController.navigateBack('/home/dashboard');
      } else {
        this.navController.navigateBack('/home/register-data');
      }
      return true;
    }
  }
}
