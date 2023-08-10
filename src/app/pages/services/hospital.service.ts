import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  controller: string = `${environment.apiUrl}/hospitals`;
  constructor(private http: HttpClient) {}

  createHospital(params: any): Observable<any> {
    return this.http.post(`${this.controller}/createHospital`, params);
  }

  getHospitals(): Observable<any> {
    return this.http.get(this.controller);
  }
}
