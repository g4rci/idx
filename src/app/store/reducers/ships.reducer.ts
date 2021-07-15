import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface Ships {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    hyperdrive_rating:      string;
    MGLT:                   string;
    starship_class:         string;
    pilots:                 string[];
    films:                  string[];
    created:                Date;
    edited:                 Date;
    url:                    string;
}

@Injectable({
    providedIn: 'root'
  })
  export class ShipsService {
  
    url: string = 'https://swapi.dev/api/starships/'
    headerDict = {
      'Authorization': 'none',
      'Access-Control-Allow-Origin': '*'
    }
    requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(this.headerDict), 
    };
    
    constructor( private http: HttpClient ) {}
  
    getShips(): Observable<any>{
      return this.http.get(this.url).pipe( 
        map( data => { return data })
        );
    }
  }