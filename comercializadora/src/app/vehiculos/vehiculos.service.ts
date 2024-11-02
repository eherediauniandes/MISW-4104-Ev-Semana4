import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl = environment.baseUrl
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.apiUrl)
  }
}
