import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  getData(){
    const arrayChar = Array.from({ length: 1 }, () => Math.floor(Math.random() * (826 - 1) + 1));
    
    return this.http.get<any>(`${this.apiUrl}character/${arrayChar.join(',')}`);
  }
}
