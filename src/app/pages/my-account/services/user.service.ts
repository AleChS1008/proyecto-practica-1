import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string;

  constructor( private http: HttpClient ) {
    this.BASE_URL = environment.API_URL;
  }

  getUsersById(id) {
    return this.http.get(`${this.BASE_URL}/user/${id}`, {
      observe: 'response',
    });
  }
}
