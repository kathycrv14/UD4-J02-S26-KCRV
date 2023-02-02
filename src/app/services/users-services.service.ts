import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  getUsers() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)
  apiUsers = environment.apiURL;

  // Metodos GET para obtener datos de la API users

  getUsersAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUsers);
  }

  getUserId(userId: string): Observable<Users[]> {
    const url = this.apiUsers + userId;
    return this.http.get<Users[]>(url);
  }

  // Metodo POSt para enviar datos a la API users

  postUser(usuario: Users): Observable<Users>{
    return this.http.post<Users>(this.apiUsers, usuario);
  }
}
