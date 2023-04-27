import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'localhost:8080/api'
  constructor(private http: HttpClient) { }

  getPerfil() : Observable<any>{
    return this.http.get<any>(`${this.url}/perfil`);
  }

  getEducacion() : Observable<any>{
    return this.http.get<any>(`${this.url}/educacion`)
  }

  getSkill(): Observable<any>{
    return this.http.get<any>(`${this.url}/skill`);
  }

  getExperiencia(): Observable<any>{
    return this.http.get<any>(`${this.url}/experiencia`);
  }

  getProyectos(): Observable<any>{
    return this.http.get<any>(`${this.url}/proyectos`);
  }

}
