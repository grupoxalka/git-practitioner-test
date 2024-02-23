import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  getData() {
    const arrayChar = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * (826 - 1) + 1)
    );
    return this.http.get<any>(`${this.apiUrl}character/${arrayChar.join(',')}`);
  }

  getEpisode(episodeUrl: string) {
    return this.http
      .get<any>(episodeUrl)
      .pipe(map((episodedata: { name: any }) => episodedata.name));
  }
  getCounts(): Observable<any> {
    const characters$ = this.http.get<any>(`${this.apiUrl}character`).pipe(
      map((characterData: { info: { count: number } }) => characterData.info.count)
    );

    const episodes$ = this.http.get<any>(`${this.apiUrl}episode`).pipe(
      map((episodeData: { info: { count: number } }) => episodeData.info.count)
    );

    const locations$ = this.http.get<any>(`${this.apiUrl}location`).pipe(
      map((locationData: { info: { count: number } }) => locationData.info.count)
    );

    return forkJoin({
      characters: characters$,
      episodes: episodes$,
      locations: locations$,
    });
  }
}
