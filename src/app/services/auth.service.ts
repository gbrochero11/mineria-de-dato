import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AUTH_ITEM = 'auth';

  constructor(private http: HttpClient) {}

  public login(data: any) {
    return this.http.post(`${environment.api}/usuarios/login`, data);
  }

  public setAuth(data: any) {
    localStorage.setItem(this.AUTH_ITEM, data);
  }

  public getAuth() {
    return localStorage.getItem(this.AUTH_ITEM);
  }
}
