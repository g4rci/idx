import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

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
  public loading: boolean = false

  
  private url = 'https://swapi.dev/api/starships/?page=';
  
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*',
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  
  constructor(private http: HttpClient ) {}

  


  getShips(page: number): Observable<any> {
    return this.http.get(`${this.url}${page}`)
    .pipe(
      map((data) => {
        return data;
      })
      );
    }

  // getShips(): Observable<any>{
  //   return forkJoin([
  //     this.http.get(this.url),
  //     this.http.get(this.url2),
  //     this.http.get(this.url3),
  //     this.http.get(this.url4)
  //   ]).pipe(
  //     map((data: any) => {
  //       let data1 = data[0].results
  //       let data2 = data[1].results
  //       let data3 = data[2].results
  //       let data4 = data[3].results
  //       let allData = [data1, data2, data3, data4].reduce((a, b) => {
  //         return a.concat(b)
  //       })
  //       return allData
  //     })
  //   )
  // }

   
}


