import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { userR } from 'src/app/shared/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  BASE_URL: string;

  constructor( private http: HttpClient ) {
    this.BASE_URL = environment.API_URL;
  }

  postUsers(form: userR) {
    return this.http.post(`${this.BASE_URL}/auth/register`, form, {
      observe: 'response',
    });
  }
  getUsersById(id) {
    return this.http.get(`${this.BASE_URL}/user/${id}`, {
      observe: 'response',
    });
  }
  putUsers(form: userR, id) {
    return this.http.put(`${this.BASE_URL}/auth/update/${id}`,form, {
      observe: 'response',
    });
  }
}
