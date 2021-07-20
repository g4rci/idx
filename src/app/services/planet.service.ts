import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Planets {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  url: string = 'https://swapi.dev/api/planets/';
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*',
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
