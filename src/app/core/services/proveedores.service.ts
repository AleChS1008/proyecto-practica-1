import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  BASE_URL: string;


  constructor( private http: HttpClient ) {
    this.BASE_URL = environment.API_URL;
  }

  getProveedores() {
    return this.http.get(`${this.BASE_URL}/proveedor/all`, {
      observe: 'response',
    });
  }
}
