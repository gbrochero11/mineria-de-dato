import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor(private http: HttpClient) {}

  public register(data: any) {
    return this.http.post(`${environment.api}/datos/agregar`, data);
  }
}
