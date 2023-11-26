import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AUTH_ITEM = 'auth';

  constructor(private http: HttpClient) {}

  public login(data: any) {
    // return this.http.post(`${environment.api}/usuarios/login`, data);
    return of({Identificacion:'', Contraseña:'', Rol: 'ADMIN'});
  }

  public setAuth(data: any) {
    localStorage.setItem(this.AUTH_ITEM, JSON.stringify(data));
  }

  public getAuth() {
    return JSON.parse(localStorage.getItem(this.AUTH_ITEM)!);
  }

  public closeSesion(){
    localStorage.clear()
  }
}
