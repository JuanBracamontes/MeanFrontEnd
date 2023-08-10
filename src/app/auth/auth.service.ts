import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

export interface userDTO {
  email?: string;
  password?: string;
  user?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  controller: string = `${environment.apiUrl}/auth`;
  constructor(private http: HttpClient) {}

  login(userDTO: any): Observable<any> {
    return this.http.post(`${this.controller}/login`, userDTO);
  }
}
