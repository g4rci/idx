import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface People {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     Gender;
    homeworld:  string;
    films:      string[];
    species:    string[];
    vehicles:   string[];
    starships:  string[];
    created:    Date;
    edited:     Date;
    url:        string;
}

export enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
}

@Injectable({
    providedIn: 'root'
  })
  export class PeopleService {
  
    url: string = 'https://swapi.dev/api/people/'
    headerDict = {
      'Authorization': 'none',
      'Access-Control-Allow-Origin': '*'
    }
    requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(this.headerDict), 
    };
    
    constructor( private http: HttpClient ) {}
  
    getPeople(): Observable<any>{
      return this.http.get(this.url).pipe( 
        map( data => { return data })
        );
    }
  }