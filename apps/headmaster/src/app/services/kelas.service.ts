/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { kelas } from '../models/kelas';

const port = environment.port;

@Injectable({
  providedIn: 'root',
})
export class KelasServices {
  constructor(private http: HttpClient) {}
  getAllClass(): Observable<kelas[]> {
    return this.http.get<kelas[]>(`${port}/api/class`);
  }

  AddClass(data: any): Observable<any> {
    console.log('data:', data);
    return this.http.post<any>(`${port}/api/class`, data);
  }
}
