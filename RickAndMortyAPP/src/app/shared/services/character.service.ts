import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/'
  

  constructor( private httpClient: HttpClient) { }

  
  getData(): Observable<any>{
    let arraychar = [];
    for (let i = 0; i < 6; i++) {
      arraychar.push(Math.floor(Math.random() * (826 - 1)));
    }
    return this.httpClient.get<any>(`${this.apiUrl}/character/${arraychar}`)
  }
}
