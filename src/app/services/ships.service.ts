import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Ships {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

@Injectable({
  providedIn: 'root',
})

export class ShipsService {
  public data = [];
  public shipsPage = 1;

  
  private url = 'https://swapi.dev/api/starships/?page=';
  
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*',
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  
  constructor(private http: HttpClient ) {}

  


  getShips(action): Observable<any> {
    return this.http.get(`${this.url}${action}`)
    .pipe(
      map((data) => {
        return data;
      })
      );
    }   
}


