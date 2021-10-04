import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesServicioService {

  constructor(private httpClient: HttpClient) { }

  getPeticiones(id: number): Observable<any> {
    const ruta = "";
    return this.httpClient.get<any>(ruta);
  }
}
